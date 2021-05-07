const {
  colors,
  Divider,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  createMuiTheme,
  Box,
  Grid,
  makeStyles,
  Button,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Paper,
  styled,
  FormHelperText,
  Backdrop,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem } =
MaterialUI;
const BlueRadio = styled(Radio)({
  color: "#727273",
  "&.Mui-checked": {
    color: "#0080ff" } });


const InnerContainer = styled(Box)({
  padding: "20px" });

const OuterContainer = styled(Box)({
  margin: "20px" });

const Question = ({ dataQuestion, index, updateQuestions, isSubmitted }) => {
  const handleChange = event => {
    const updatedQuestion = {
      ...dataQuestion,
      selected_answer: event.target.value };

    updateQuestions(index, updatedQuestion);
  };
  const AnswerList = dataQuestion.all_answer.map((answer) => /*#__PURE__*/
  React.createElement(FormControlLabel, {
    value: answer,
    control: /*#__PURE__*/React.createElement(BlueRadio, null),
    label: /*#__PURE__*/React.createElement("div", { dangerouslySetInnerHTML: { __html: answer } }),
    disabled: isSubmitted }));


  return /*#__PURE__*/(
    React.createElement(Paper, { elevation: 5 }, /*#__PURE__*/
    React.createElement(InnerContainer, null, /*#__PURE__*/
    React.createElement(Typography, { variant: "body1" }, /*#__PURE__*/
    React.createElement("div", { dangerouslySetInnerHTML: { __html: dataQuestion.question } })), /*#__PURE__*/

    React.createElement(FormControl, {
      error:
      dataQuestion.selected_answer &&
      dataQuestion.correct_answer !== dataQuestion.selected_answer,

      component: "fieldset" }, /*#__PURE__*/

    React.createElement(FormLabel, { component: "legend" }), /*#__PURE__*/
    React.createElement(RadioGroup, {
      "aria-label": "gender",
      name: "gender1",
      value: dataQuestion.selectedAnswer,
      onChange: handleChange },

    AnswerList), /*#__PURE__*/

    React.createElement(FormHelperText, null,
    isSubmitted && (
    dataQuestion.selected_answer &&
    dataQuestion.selected_answer !== dataQuestion.correct_answer ?
    "*Wrong Answer, The Correct Answer is" +
    " " +
    dataQuestion.correct_answer :
    dataQuestion.selected_answer &&
    dataQuestion.selected_answer === dataQuestion.correct_answer ?
    "You Got it Correct" :
    ""))))));





};
const getShuffledArr = arr => {
  const newArr = arr.slice();
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
  }
  return newArr;
};
const ScoreContainer = styled(Box)({
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff",
  color: "black" });

const Score = ({ result, getQuestions }) => {
  return /*#__PURE__*/(
    React.createElement(Paper, { varient: "outlined" }, /*#__PURE__*/
    React.createElement(ScoreContainer, null, /*#__PURE__*/
    React.createElement(Grid, {
      container: true,
      direction: "column-reverse",
      justify: "flex-end",
      alignItems: "center" }, /*#__PURE__*/

    React.createElement(Typography, { color: "lightGray", varient: "h3", gutterBottom: true },
    "You scored " + result + "%")), /*#__PURE__*/


    React.createElement(Grid, {
      container: true,
      direction: "column-reverse",
      justify: "flex-end",
      alignItems: "center" }, /*#__PURE__*/

    React.createElement(Button, { onClick: getQuestions, variant: "contained", color: "primary" }, "Restart")))));






};
const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "primary" },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 200 },

  selectEmpty: {
    marginTop: theme.spacing(2) } }));


const Dropdowns = ({ numberOfQuestions, setNumberOfQuestions }) => {
  const classes = useStyles();
  const handleChange = event => {
    const name = event.target.name;
    setNumberOfQuestions(event.target.value);
  };
  return /*#__PURE__*/(
    React.createElement(FormControl, { className: classes.formControl }, /*#__PURE__*/
    React.createElement(InputLabel, { htmlFor: "age-native-simple" }, "Number of Questions"), /*#__PURE__*/
    React.createElement(Select, { native: true, value: numberOfQuestions, onChange: handleChange }, /*#__PURE__*/
    React.createElement("option", { "aria-label": "None", value: "" }), /*#__PURE__*/
    React.createElement("option", { value: 5 }, " 5 Questions"), /*#__PURE__*/
    React.createElement("option", { value: 10 }, " 10 Questions"), /*#__PURE__*/
    React.createElement("option", { value: 15 }, " 15 Questions"), /*#__PURE__*/
    React.createElement("option", { value: 20 }, " 20 Questions"), /*#__PURE__*/
    React.createElement("option", { value: 25 }, " 25 Questions"))));



};
const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const classes = useStyles();
  const handleChange = event => {
    const name = event.target.name;
    console.log("event.target.value", event.target.value);
    setSelectedCategory(event.target.value);
  };
  const CategoryMenuList = categories.map((category, index) => /*#__PURE__*/
  React.createElement("option", { value: category.id }, " ", category.name));

  return /*#__PURE__*/(
    React.createElement(FormControl, { className: classes.formControl }, /*#__PURE__*/
    React.createElement(InputLabel, { htmlFor: "age-native-simple" }, "Categories"), /*#__PURE__*/
    React.createElement(Select, {
      native: true,
      value: categories[selectedCategory],
      onChange: handleChange }, /*#__PURE__*/

    React.createElement("option", { "aria-label": "None", value: "" }),
    CategoryMenuList)));



};
const Difficult = ({ difficultly, setDifficulty }) => {
  const classes = useStyles();
  const handleChange = event => {
    const name = event.target.name;
    setDifficulty(event.target.value);
  };
  return /*#__PURE__*/(
    React.createElement(FormControl, { className: classes.formControl }, /*#__PURE__*/
    React.createElement(InputLabel, { htmlFor: "age-native-simple" }, "Difficulty"), /*#__PURE__*/
    React.createElement(Select, { native: true, value: difficultly, onChange: handleChange }, /*#__PURE__*/
    React.createElement("option", { "aria-label": "None", value: "" }), /*#__PURE__*/
    React.createElement("option", { value: "easy" }, " easy"), /*#__PURE__*/
    React.createElement("option", { value: "medium" }, " medium"), /*#__PURE__*/
    React.createElement("option", { value: "hard" }, " hard"))));



};
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const App = () => {
  const [data, setData] = React.useState([]);
  const [isSubmitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState(11);
  const [difficultly, setDifficulty] = React.useState();
  const updateQuestions = (index, newData) => {
    console.log(data);
    const newQuestionsArray = [...data];
    newQuestionsArray[index] = newData;
    setData(newQuestionsArray);
  };
  const getCategories = async () => {
    const response = await axios.get("https://opentdb.com/api_category.php");
    setCategories(response.data.trivia_categories);
  };
  const getQuestions = async () => {
    setLoading(true);
    console.log("selectedCategory is", selectedCategory);
    const response = await axios.get(
    "https://opentdb.com/api.php?amount=" +
    numberOfQuestions +
    "&category=" +
    selectedCategory +
    "&difficulty=" +
    difficultly);

    console.log(response);
    const formattedData = response.data.results.map(problems => {
      const shuffledAnswers = getShuffledArr([
      ...problems.incorrect_answers,
      problems.correct_answer]);

      return {
        ...problems,
        all_answer: shuffledAnswers };

    });
    console.log(formattedData);
    setData(formattedData);
    setSubmitted(false);
    setLoading(false);
  };
  React.useEffect(() => {
    getQuestions();
  }, [numberOfQuestions, selectedCategory, difficultly]);
  React.useEffect(() => {
    getCategories();
  }, []);
  React.useEffect(() => {
    console.log(categories);
  }, [categories]);

  const newProblemsList = data.map((problem, index) => /*#__PURE__*/
  React.createElement(OuterContainer, null, /*#__PURE__*/
  React.createElement(Question, {
    dataQuestion: problem,
    updateQuestions: updateQuestions,
    index: index,
    isSubmitted: isSubmitted })));



  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo(0, 0);
  };
  const getScore = () => {
    const numberOfCorrect = data.filter(
    dataItem => dataItem.correct_answer === dataItem.selected_answer).
    length;
    const totalNumberOfQuestions = data.length;
    return Math.round(numberOfCorrect / totalNumberOfQuestions * 100);
  };
  const classes = useStyles();
  return /*#__PURE__*/(
    React.createElement(Container, { component: "main", maxWidth: "md" }, /*#__PURE__*/
    React.createElement(Backdrop, { className: classes.backdrop, open: loading }, /*#__PURE__*/
    React.createElement(CircularProgress, { color: "inherit" })),

    isSubmitted && /*#__PURE__*/React.createElement(Score, { getQuestions: getQuestions, result: getScore() }), /*#__PURE__*/

    React.createElement(Dropdowns, {
      numberOfQuestions: numberOfQuestions,
      setNumberOfQuestions: setNumberOfQuestions }), /*#__PURE__*/

    React.createElement(Categories, {
      categories: categories,
      selectedCategory: selectedCategory,
      setSelectedCategory: setSelectedCategory }), /*#__PURE__*/

    React.createElement(Difficult, { difficultly: difficultly, setDifficulty: setDifficulty }),
    newProblemsList, /*#__PURE__*/
    React.createElement(Grid, {
      container: true,
      direction: "column-reverse",
      justify: "flex-end",
      alignItems: "center" }, /*#__PURE__*/

    React.createElement(Button, {
      disabled: isSubmitted,
      onClick: handleSubmit,
      variant: "contained",
      color: "primary" }, "Submit"))));






};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));