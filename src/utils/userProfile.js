module.exports = {
   sum(questions) {
    let { first_ask = 10, second_ask, third_ask, fourth_ask } = questions;
    try {
      second_ask = second_ask.toLowerCase() == 'sim' ? 10 : 0;

      if(third_ask.toLowerCase().includes('frase 1')) {
         third_ask = 5
      } else if(third_ask.toLowerCase().includes('frase 2')) {
         third_ask = 10
      } else {
         third_ask = 15
      }
    
      if(fourth_ask.toLowerCase().includes('menos de 1a')) {
         fourth_ask = 5
      } else if(fourth_ask.toLowerCase().includes('entre 1 e 5a')) {
         fourth_ask = 10
      } else if(fourth_ask.toLowerCase().includes('entre 5 e 9a')){
         fourth_ask = 15
      } else if(fourth_ask.toLowerCase().includes('mais de 10a')) {
        fourth_ask = 20
      } else {
        fourth_ask = 0
      }

      const sum = first_ask + second_ask + third_ask + fourth_ask * 2
      return sum
     
    }
    catch(err) {
      return 'error'
    }
  },

  async rating(questions_value) {
    let profile = this.sum(questions_value)

    profile = profile <= 15 ? profile = 'Aprendiz' : profile = profile;
    if(profile <= 70)
    
  }


}