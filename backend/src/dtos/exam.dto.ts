import { z } from "zod";
import { QuestionType } from "../types/enums";


export const examSubmitSchema = z.object({
  answers: z.record(z.string(), z.string()), 
});

export type ExamSubmitInput = z.infer<typeof examSubmitSchema>;


export interface ExamListItem {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  orderIndex: number;
}

export interface ExamQuestionResponse {
  id: number;
  questionNumber: number;
  questionType: QuestionType;
  questionText: string;
  options?: string[]; 
}

export interface ExamDetailResponse {
  exam: {
    id: number;
    slug: string;
    title: string;
    description: string | null;
    htmlContent: string | null;
  };
  questions: ExamQuestionResponse[];
}

export interface ExamResultItem {
  questionNumber: number;
  isCorrect: boolean;
  correctAnswer?: string;
  correctOptionIndex?: number; 
}

export interface ExamSubmitResponse {
  submissionId: number;
  score: number;
  totalQuestions: number;
  percentage: number;
  results: ExamResultItem[];
}

export interface ExamSubmissionHistoryItem {
  id: number;
  score: number;
  totalQuestions: number;
  submittedAt: Date;
}
