export const drawerWidth = 240;

export enum AnswerTags {
  typescript = "typescript",
  react = "react",
  redux = "redux",
}

export const selectedAnswers: {
  [keys in AnswerTags]: {
    questions: string[];
  }
} = {
  typescript: {
    questions: ['56749824']
  },
  react: {
    questions: ['56979012']
  },
  redux: {
    questions: [],
  }
}