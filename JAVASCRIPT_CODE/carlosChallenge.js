// Question 1: Data Formating
const incomingData = [
    {
      id: '1xw13',
      date: '2021-09-01T21:30:00Z',
      exercises: [
        {
          name: 'Day 1 Warm up',
          type: 'workout',
          completed: true,
          points: 5,
        },
        {
          name: 'Day 1 Workout',
          type: 'workout',
          completed: true,
          points: 30,
        },
        {
          name: 'Day 1 Cardio',
          type: 'cardio',
          completed: false,
          points: 10,
        },
      ]
    },
    {
      id: '2kk22',
      date: '2021-09-02T21:30:00Z',
      exercises: [
        {
          name: 'Day 2 Warm up',
          type: 'workout',
          completed: false,
          points: 10,
        },
        {
          name: 'Day 2 Workout',
          type: 'workout',
          completed: false,
          points: 20,
        },
        {
          name: 'Day 2 Cardio',
          type: 'cardio',
          completed: true,
          points: 30,
        },
      ]
    }
  ];
  
  const outputData=(inputData)=>{
    for (let i=0;i<inputData.length;i++){
    let exProp=inputData[i].exercises.slice();
    delete inputData[i].exercises;
    inputData[i].totalPoints=0;
    inputData[i].exercises=exProp;
    for(let j=0;j<inputData[i].exercises.length;j++){
        inputData[i].totalPoints+=inputData[i].exercises[j].points;
        inputData[i].exercises[j].date=inputData[i].date; 
    }
    }
    let outputJson=JSON.stringify(inputData)
    return outputJson;
  }
  
  // Answer
  console.log(outputData(incomingData))
   
  