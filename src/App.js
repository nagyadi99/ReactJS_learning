import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheets from "./components/StyleSheets";
import Inline from "./components/Inline";
import "./appStyle.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo></FragmentDemo> */}
      <Table></Table>
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline /> */}
      {/* <StyleSheets primary={false} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter></Counter>{" "} */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* {<Hello />} */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
