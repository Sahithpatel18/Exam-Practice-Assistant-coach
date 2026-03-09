import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2 } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";

// Set worker path for pdfjs using unpkg which is more reliable for newer versions
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

interface DocumentUploadProps {
  onTextExtracted: (text: string, filename: string) => void;
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({
  onTextExtracted,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      await processFile(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      await processFile(files[0]);
    }
  };

  const processFile = async (file: File) => {
    setIsProcessing(true);
    try {
      let extractedText = "";

      if (file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => item.str)
            .join(" ");
          fullText += pageText + "\n";
        }
        extractedText = fullText;
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        extractedText = result.value;
      } else if (file.type === "text/plain") {
        extractedText = await file.text();
      } else {
        alert("Unsupported file type. Please upload PDF, DOCX, or TXT.");
        setIsProcessing(false);
        return;
      }

      // Limit text length to avoid token limits (e.g., first 15000 characters)
      const truncatedText = extractedText.substring(0, 15000);
      onTextExtracted(truncatedText, file.name);
    } catch (error) {
      console.error("Error processing file:", error);
      alert("Failed to process the document.");
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  return (
    <Card className="shadow-medium border-0 bg-gradient-to-r from-secondary/10 to-primary/5 mb-8">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl flex items-center justify-center space-x-2">
          <FileText className="h-5 w-5 text-primary" />
          <span>Generate from Document (RAG)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.docx,.txt"
            className="hidden"
          />
          {isProcessing ? (
            <div className="flex flex-col items-center space-y-4">
              <Loader2 className="h-10 w-10 text-primary animate-spin" />
              <p className="text-muted-foreground">
                Extracting text from document...
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4 cursor-pointer">
              <div className="p-4 bg-background rounded-full shadow-sm">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground mt-1">
                  PDF, DOCX, or TXT (Max 10MB)
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
