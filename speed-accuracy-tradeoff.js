const fixation_duration = 500;

//fixation
var fixation = {
  type: 'html-keyboard-response',
  stimulus: '<div style="font-size:60px;">+</div>',
  choices: jsPsych.NO_KEYS,
  trial_duration: fixation_duration,
};


var timeline = [];





var instr1 = {
  type: 'html-keyboard-response',
  stimulus:`<p>In this task, you will be viewing text stimuli. A string of letters will appear, and you will respond if it is a word or non-word. </p>
  <p>In one instance, you will be asked to respond as quickly as possible. In another instance, you will be asked to respond as accurately as possible.</p>
  <p>When the text appears, press <b>F</b> if the stimulus is a word and <b>J</b> if the stimulus is not a word. </p> 
  <p>Press the space bar to continue.</p>`,
  choices: ['space']
}
timeline.push(instr1)

var instr2 = {
  type: 'html-keyboard-response',
  stimulus:`<p>You will now complete a practice round. The following screen will display a string of text that is a <b> nonword </b>. </p>
  <p>We want you to respond <b>nonword</b>, so press <b>J</b>. Respond as quickly as you can, in fewer than 4 seconds. </p>
  <p>When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the practice round.<p>`,
  choices: ['space']
}
timeline.push(instr2)

var mask_err_slow = {
  type: 'html-keyboard-response',
  stimulus: `<p> Whoops, you went too slow! Let's try that again. </p> 
  <p>Try to respond as <b>quickly</b> as you can, in fewer than 4 seconds.</p>
  <p>Remember, we want you to respond <b>nonword</b>, so press <b>J</b>.</p>
  <p>When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the practice round.</p>
  `,
  choices: ['space']
}

var mask_err_acc = {
  type: 'html-keyboard-response',
  stimulus: `<p> Whoops! Let's try that again. </p> 
  <p>Remember, we want you to respond <b>nonword</b>, so press <b>J</b>.</p>
  <p>When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the practice round.</p>
  `,
  choices: ['space']
}

var mask_err_fast = {
    type: 'html-keyboard-response',
    stimulus: `<p> Whoops, you went too fast! Let's try that again. </p> 
    <p>Make sure you view the text before making a response.</p>
    <p>Remember, we want you to respond <b>nonword</b>, so press <b>J</b>.</p>
    <p>When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the practice round.</p>
    `,
    choices: ['space']  
}

var mask_err_last_slow = {
  type: 'html-keyboard-response',
  stimulus: `<p>Your responses were too slow. For the actual task, please try to respond in <b>fewer than 3.5 seconds</b>.</p>
  <p>Press the space bar to continue.</p>`,
  choices: ['space']

}

var mask_err_last_fast = {
  type: 'html-keyboard-response',
  stimulus: `<p> Your responses was too fast. For the actual task, please try to view the text before making a response.</p>
  <p>Press the space bar to continue.</p>`,
  choices: ['space']
}

var mask_err_last_acc = {
  type: 'html-keyboard-response',
  stimulus: `<p> You failed to make the correct response. For the actual task, please try to be more careful when making a response.</p>
  <p>Press the space bar to continue.</p>`,
  choices: ['space']
}


var testNonWordStimuli = [
  {word: 'murkt', word_validity: 'invalid', word_frequency: 'undefined'},
];

var testNonWord = {
  timeline_variables: testNonWordStimuli,
  randomize_order: true,
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p class="stimulus">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      post_trial_gap: 0
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){ return "<p class='stimulus'>"+jsPsych.timelineVariable('word', true)+"</p>"; },
      choices: ['f','j'],
      post_trial_gap: 0,
      data: {
        word_validity: jsPsych.timelineVariable('word_validity'),
        word_frequency: jsPsych.timelineVariable('word_frequency')
      },
      on_finish: function(data){
        if(data.word_validity == 'valid'){
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f');
        } else {
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j');
        }
        data.correct = correct;
      }
    }
  ]
}




var testNonWordStimuli2 = [
  {word: 'mutic', word_validity: 'invalid', word_frequency: 'undefined'},
];

var testNonWord2 = {
  timeline_variables: testNonWordStimuli2,
  randomize_order: true,
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p class="stimulus">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      post_trial_gap: 0
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){ return "<p class='stimulus'>"+jsPsych.timelineVariable('word', true)+"</p>"; },
      choices: ['f','j'],
      post_trial_gap: 0,
      data: {
        word_validity: jsPsych.timelineVariable('word_validity'),
        word_frequency: jsPsych.timelineVariable('word_frequency')
      },
      on_finish: function(data){
        if(data.word_validity == 'valid'){
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f');
        } else {
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j');
        }
        data.correct = correct;
      }
    }
  ]
}




var testNonWordStimuli3 = [
  {word: 'ajake', word_validity: 'invalid', word_frequency: 'undefined'},
];

var testNonWord3 = {
  timeline_variables: testNonWordStimuli3,
  randomize_order: true,
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p class="stimulus">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      post_trial_gap: 0
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){ return "<p class='stimulus'>"+jsPsych.timelineVariable('word', true)+"</p>"; },
      choices: ['f','j'],
      post_trial_gap: 0,
      data: {
        word_validity: jsPsych.timelineVariable('word_validity'),
        word_frequency: jsPsych.timelineVariable('word_frequency')
      },
      on_finish: function(data){
        if(data.word_validity == 'valid'){
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f');
        } else {
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j');
        }
        data.correct = correct;
      }
    }
  ]
}











timeline.push(testNonWord)



var conditional1_slow = {
  timeline: [mask_err_slow, testNonWord2],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(data.rt >= 2500 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional1_slow)

var conditional1_fast = {
  timeline: [mask_err_fast, testNonWord2],
  conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(data.rt <= 250 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
      return true;
    } else{
      return false;
    } 
  }
}
timeline.push(conditional1_fast)

var conditional1_acc = {
    timeline: [mask_err_acc, testNonWord2],
    conditional_function: function(){
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional1_acc)

var conditional2_slow = {
    timeline: [mask_err_slow, testNonWord3],
    conditional_function: function(){
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.rt >= 2500 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional2_slow)
  
var conditional2_fast = {
    timeline: [mask_err_fast, testNonWord3],
    conditional_function: function(){
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.rt <= 250 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional2_fast)
  
var conditional2_acc = {
      timeline: [mask_err_acc, testNonWord3],
      conditional_function: function(){
        var data = jsPsych.data.get().last(1).values()[0];
        if(data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f')){
          return true;
        } else{
          return false;
        } 
      }
}
timeline.push(conditional2_acc)

var conditional3_slow = {
    timeline: [mask_err_last_slow],
    conditional_function: function(){
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.rt >= 2500 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional3_slow)
  
var conditional3_fast = {
    timeline: [mask_err_last_fast],
    conditional_function: function(){
      var data = jsPsych.data.get().last(1).values()[0];
      if(data.rt <= 250 && data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
        return true;
      } else{
        return false;
      } 
    }
}
timeline.push(conditional3_fast)
  
var conditional3_acc = {
    timeline: [mask_err_last_acc],
    conditional_function: function(){
    var data = jsPsych.data.get().last(1).values()[0];
    if(data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f')){
        return true;
    } else{
        return false;
    } 
    }
}
timeline.push(conditional3_acc)

var practiceEnd ={
  type: 'html-keyboard-response',
  stimulus:`<p>You have completed the practice round. You will now begin the main task. </p>
  <p>Try to keep you fingers on the <b>F</b> and <b>J</b> keys while you view the images.<p>
  <p>And please respond as <b>quickly</b> as you can, in fewer than 3.5 seconds.</p>
  <p>When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin to task.</p>`,
  choices: ['space']
}
timeline.push(practiceEnd)










//Main Task
var instructionsSpeed = {
  type: 'html-keyboard-response',
  stimulus: '<p>Press F if the text is a word, press J if the text is not a word. Respond as <strong> quickly </strong> as possible. <br> When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the experiment. </br> </p>',
  choices: ['space']
}

var random = Math.random()
//console.log(random)

if(random > .5){
  timeline.push(instructionsSpeed);
}


/* 
* Word Length: 5
* Emotional Arousal: 5-10
* Emotional Dominance: 5-10
* Number of Syllables: 2
*/


var stimuliSpeed = [
  {word: 'happy', word_validity: 'valid', word_frequency: 'high'},
  {word: 'halpy', word_validity: 'valid', word_frequency: 'low'},
  {word: 'perky', word_validity: 'invalid', word_frequency: undefined},
  {word: 'perkn', word_validity: 'invalid', word_frequency: undefined},
];

var trialsSpeed = {
  timeline_variables: stimuliSpeed,
  randomize_order: true,
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p class="stimulus">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      post_trial_gap: 0
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){ return "<p class='stimulus'>"+jsPsych.timelineVariable('word', true)+"</p>"; },
      choices: ['f','j'],
      post_trial_gap: 0,
      data: {
        word_validity: jsPsych.timelineVariable('word_validity'),
        word_frequency: jsPsych.timelineVariable('word_frequency')
      },
      on_finish: function(data){
        if(data.word_validity == 'valid'){
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f');
        } else {
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j');
        }
        data.correct = correct;
      }
    }
  ]
}

if(random > .5){
  timeline.push(trialsSpeed);
}



var instructionsAccuracy = {
  type: 'html-keyboard-response',
  stimulus: '<p>Press F if the text is a word, press J if the text is not a word. Respond as <strong> accurately </strong> as possible. <br> When you are ready, rest your fingers on the <b>F</b> and <b>J</b> keys, and press the spacebar to begin the experiment. </br> </p>',
  choices: ['space']
}
timeline.push(instructionsAccuracy);





var stimuliAccuracy = [

  {word: 'candy', word_validity: 'valid', word_frequency: 'high'},
  {word: 'hippo', word_validity: 'valid', word_frequency: 'low'},
  {word: 'caxdy', word_validity: 'invalid', word_frequency: undefined},
  {word: 'hitpo', word_validity: 'invalid', word_frequency: undefined},
];







var trialsAccuracy = {
  timeline_variables: stimuliAccuracy,
  randomize_order: true,
  timeline: [
    {
      type: 'html-keyboard-response',
      stimulus: '<p class="stimulus">+</p>',
      choices: jsPsych.NO_KEYS,
      trial_duration: 500,
      post_trial_gap: 0
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){ return "<p class='stimulus'>"+jsPsych.timelineVariable('word', true)+"</p>"; },
      choices: ['f','j'],
      post_trial_gap: 0,
      data: {
        word_validity: jsPsych.timelineVariable('word_validity'),
        word_frequency: jsPsych.timelineVariable('word_frequency')
      },
      on_finish: function(data){
        if(data.word_validity == 'valid'){
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f');
        } else {
          var correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j');
        }
        data.correct = correct;
      }
    }
  ]
}
timeline.push(trialsAccuracy);

if(random < .5){
  timeline.push(instructionsSpeed)
  timeline.push(trialsSpeed)
}

var end = {
  type: "html-keyboard-response",
  stimulus: '<p>You have completed the task. Press any key to exit.</p>'
};
timeline.push(end)


jsPsych.init({
  timeline: timeline,
  on_finish: function() {
    jsPsych.data.displayData();
  },
  default_iti: 250
});
