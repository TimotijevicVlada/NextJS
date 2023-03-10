export enum ActionType {
    //BUDGET
    ADD_NEW_INCOME = "ADD_NEW_INCOME",
    ADD_NEW_EXPENSE = "ADD_NEW_EXPENSE",
    DELETE_TRANSACTION = "DELETE_TRANSACTION",

    //TO DO
    ADD_NEW_TODO = "ADD_NEW_TODO",
    ARCHIVE_TODO = "ARCHIVE_TODO",
    DELETE_TODO = "DELETE_TODO",
    UPDATE_TODO = "UPDATE_TODO",
    CHECK_TODO = "CHECK_TODO",
    RESTORE_TODO = "RESTORE_TODO",

    //CARACTERS
    GET_CARACTERS = "GET_CARACTERS",
    GET_CARACTERS_ERROR = "GET_CARACTERS_ERROR",
    GET_CARACTERS_LOADING = "GET_CARACTERS_LODAING",

    GET_CARACTERS_PAGINATION = "GET_CARACTERS_PAGINATION",
    GET_CARACTERS_PAGINATION_ERROR = "GET_CARACTERS_PAGINATION_ERROR",
    GET_CARACTERS_PAGINATION_LOADING = "GET_CARACTERS_PAGINATION_LOADING",

    GET_SINGLE_CARACTER = "GET_SINGLE_CARACTER",
    GET_SINGLE_CARACTER_ERROR = "GET_SINGLE_CARACTER_ERROR",
    GET_SINGLE_CARACTER_LOADING = "GET_SINGLE_CARACTER_LOADING",

    //QUIZ
    GET_QUESTIONS = "GET_QUESTIONS",
    GET_QUESTIONS_ERROR = "GET_QUESTIONS_ERROR",
    GET_QUESTIONS_LOADING = "GET_QUESTIONS_LOADING"
}