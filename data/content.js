/*
  EduPrep Sri Lanka — content data
  --------------------------------
  This file is deliberately structured like database tables, so that
  moving to Django + PostgreSQL/MySQL later is a straight mapping:

  Subject      -> subjects table
  Lesson       -> lessons table (FK: subject_id)
  Paper        -> papers table (FK: subject_id, optional lesson_id)
  Question     -> questions table (FK: lesson_id, optional paper_id)
  Option       -> question_options table (FK: question_id)
  Review       -> paper_reviews table (FK: paper_id)

  Right now this is static JS. Later, each of these arrays becomes an
  API endpoint (e.g. GET /api/subjects/ict/lessons/) and this file
  disappears entirely — the page code that reads it barely changes.
*/

const SUBJECTS = [
  {
    id: "ict",
    level: "A/L",
    name: "Information & Communication Technology",
    short: "ICT",
    color: "#3F8361",
    description: "Programming, databases, networks, and systems — structured lesson by lesson to match the A/L ICT syllabus.",
    lessonCount: 6,
    paperCount: 12,
    questionCount: 340,
  },
  {
    id: "accounting",
    level: "A/L",
    name: "Accounting",
    short: "Accounting",
    color: "#D98E3C",
    description: "From basic double-entry to final accounts — every lesson paired with real past-paper questions.",
    lessonCount: 5,
    paperCount: 10,
    questionCount: 280,
  },
];

const LESSONS = {
  ict: [
    { id: "intro-ict", num: 1, title: "Introduction to ICT", questionCount: 42, paperCount: 8, mastery: 0 },
    { id: "computer-systems", num: 2, title: "Computer Systems", questionCount: 58, paperCount: 9, mastery: 0 },
    { id: "data-representation", num: 3, title: "Data Representation", questionCount: 51, paperCount: 8, mastery: 0 },
    { id: "networks", num: 4, title: "Networks & Communication", questionCount: 63, paperCount: 10, mastery: 0 },
    { id: "databases", num: 5, title: "Database Management", questionCount: 71, paperCount: 11, mastery: 0 },
    { id: "programming", num: 6, title: "Programming Fundamentals", questionCount: 55, paperCount: 9, mastery: 0 },
  ],
  accounting: [
    { id: "accounting-equation", num: 1, title: "The Accounting Equation", questionCount: 38, paperCount: 7, mastery: 0 },
    { id: "double-entry", num: 2, title: "Double Entry System", questionCount: 64, paperCount: 10, mastery: 0 },
    { id: "final-accounts", num: 3, title: "Final Accounts", questionCount: 69, paperCount: 10, mastery: 0 },
    { id: "partnership", num: 4, title: "Partnership Accounts", questionCount: 47, paperCount: 8, mastery: 0 },
    { id: "company-accounts", num: 5, title: "Company Accounts", questionCount: 62, paperCount: 9, mastery: 0 },
  ],
};

// Sample quiz questions for the "Database Management" lesson (ICT).
// Each question stores explanations for every option, not just the
// correct one — this is the core differentiator of the platform.
const QUIZ_QUESTIONS = {
  databases: [
    {
      id: "q1",
      lessonId: "databases",
      sourceYear: 2023,
      sourcePaper: "2023 A/L ICT Paper I",
      text: "Which of the following best describes a 'primary key' in a relational database table?",
      options: [
        {
          key: "A",
          text: "A field that can contain duplicate values",
          correct: false,
          explanation: "Incorrect — a primary key must contain unique values for every row. A field allowing duplicates cannot serve as a primary key.",
        },
        {
          key: "B",
          text: "A field that uniquely identifies each record in a table",
          correct: true,
          explanation: "Correct — the primary key's role is to uniquely identify each row so that no two records can be confused with one another.",
        },
        {
          key: "C",
          text: "A field used only for sorting records alphabetically",
          correct: false,
          explanation: "Incorrect — sorting is a separate operation. A primary key's purpose is identification, not ordering.",
        },
        {
          key: "D",
          text: "A field that must always store text data",
          correct: false,
          explanation: "Incorrect — primary keys can be numeric (e.g. an auto-incrementing ID), text, or other types, as long as values are unique.",
        },
      ],
    },
    {
      id: "q2",
      lessonId: "databases",
      sourceYear: 2022,
      sourcePaper: "2022 A/L ICT Paper I",
      text: "What is the main purpose of normalization in database design?",
      options: [
        {
          key: "A",
          text: "To increase data redundancy for backup purposes",
          correct: false,
          explanation: "Incorrect — normalization aims to reduce redundancy, not increase it. More redundancy raises inconsistency risk.",
        },
        {
          key: "B",
          text: "To reduce data redundancy and improve data integrity",
          correct: true,
          explanation: "Correct — normalization organizes tables to minimize duplicate data and prevent update, insert, and delete anomalies.",
        },
        {
          key: "C",
          text: "To make queries run without using SQL",
          correct: false,
          explanation: "Incorrect — normalization is a design principle for table structure; it doesn't change how queries are written.",
        },
        {
          key: "D",
          text: "To convert a database into a spreadsheet format",
          correct: false,
          explanation: "Incorrect — normalization has nothing to do with file format conversion.",
        },
      ],
    },
    {
      id: "q3",
      lessonId: "databases",
      sourceYear: 2021,
      sourcePaper: "2021 A/L ICT Paper I",
      text: "In SQL, which statement is used to retrieve data from a database table?",
      options: [
        {
          key: "A",
          text: "GET",
          correct: false,
          explanation: "Incorrect — GET is not a valid SQL keyword for retrieving table data.",
        },
        {
          key: "B",
          text: "FETCH",
          correct: false,
          explanation: "Incorrect — FETCH is used with cursors in some SQL dialects, but it is not the standard statement for querying a table.",
        },
        {
          key: "C",
          text: "SELECT",
          correct: true,
          explanation: "Correct — SELECT is the standard SQL statement used to query and retrieve rows from one or more tables.",
        },
        {
          key: "D",
          text: "SHOW",
          correct: false,
          explanation: "Incorrect — SHOW is used in some databases (like MySQL) to display metadata (e.g. table lists), not row data from a query.",
        },
      ],
    },
  ],
};

// Sample papers listing for a subject
const PAPERS = {
  ict: [
    { id: "ict-2023-p1", year: 2023, title: "A/L ICT Paper I", type: "MCQ", questionCount: 50, hasReview: true },
    { id: "ict-2023-p2", year: 2023, title: "A/L ICT Paper II", type: "Structured & Essay", questionCount: 12, hasReview: true },
    { id: "ict-2022-p1", year: 2022, title: "A/L ICT Paper I", type: "MCQ", questionCount: 50, hasReview: true },
    { id: "ict-2022-p2", year: 2022, title: "A/L ICT Paper II", type: "Structured & Essay", questionCount: 12, hasReview: false },
    { id: "ict-2021-p1", year: 2021, title: "A/L ICT Paper I", type: "MCQ", questionCount: 50, hasReview: true },
  ],
  accounting: [
    { id: "acc-2023-p1", year: 2023, title: "A/L Accounting Paper I", type: "MCQ", questionCount: 50, hasReview: true },
    { id: "acc-2023-p2", year: 2023, title: "A/L Accounting Paper II", type: "Structured & Essay", questionCount: 8, hasReview: false },
    { id: "acc-2022-p1", year: 2022, title: "A/L Accounting Paper I", type: "MCQ", questionCount: 50, hasReview: true },
  ],
};
