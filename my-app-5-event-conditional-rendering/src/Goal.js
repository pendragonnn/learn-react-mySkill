import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

// conditional rendering with if statement
// export default function Goal(props) {
//   const isGoal = props.isGoal;

//   if(isGoal) {
//     return <MadeGoal />
//   }

//   return <MissedGoal/>
// }

// ternary operator
export default function Goal(props) {
  const isGoal = props.isGoal;

  return (
    <>
      {isGoal ? <MadeGoal/> : <MissedGoal/>}
    </>
  )
}