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
    questions: ['56749824', '57102790', '57086672', '56801439'] // 57210843 57181194
  },
  react: {
    questions: ['56979012', '57132814',  '57066711', '56926343', '56893971', '56828846'] //58368409, 57085048
  },
  redux: {
    questions: ['58449561', '57210138', '57197859', '57085611',  '57044956', '56694102'], //57142137, 56999154, 56999154, 56736168
  }
}