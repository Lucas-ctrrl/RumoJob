String.prototype.interpolate = function(params) {
    const names = Object.keys(params);
    const vals = Object.values(params);
    return new Function(...names, `return \`${this}\`;`)(...vals);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Página do formulário
    const submitButton = document.getElementById("submitBtn");
    if (submitButton) {
      submitButton.addEventListener("click", () => {
        const interests = Array.from(
          document.querySelectorAll('input[name="interests"]:checked')
        ).map((input) => input.value);

        const skills = (document.getElementById("skills").value).split(", ");
        console.log(skills)
        console.log(interests)
        const name = document.getElementById("name").value;
        const salary = document.getElementById("salary").value;
        const desc = document.getElementById("description").value;
        const become = document.getElementById("howToBecome").value;
        const area = document.getElementById("area").value;
        const video = (document.getElementById("video").value).replace("watch?v=", "embed/");
        const progression = (document.getElementById("progression").value).replace(", ", " → " ).replace("→", "→");
  
        console.log(JSON.stringify(interests))
        var interestss = `${JSON.stringify(interests)}`;
        console.log(JSON.stringify(skills))
        var skillss = `${JSON.stringify(skills)}`;
        
        const templatee = '{"name": "${name}", "interests": ${interestss}, "salary": "${salary}", "description": "${desc}", "howToBecome": "${become}", "skills": ${skillss}, "area": "${area}", "video": "${video}", "progression": "${progression}"}'
        const result = templatee.interpolate({name, interestss, salary, desc, become, skillss, area, video, progression});
        console.log(result)
        console.log(JSON.parse(result));
        localStorage.setItem('NewProfession', JSON.stringify(result));
        let objecto = localStorage.getItem('NewProfession');
        console.log(JSON.parse(objecto));
        localStorage.clear
  
        if (interests.length === 0) {
          alert("Por favor, escolha pelo menos uma opção.");
          return;
        }
        if (interests.length > 4) {
          alert("Por favor, escolha apenas 4 opções.");
          return;
        }
  
        if (interests.includes("Automação") && interests.includes("Informatica") ){
          alert("Por Favor, escolha apenas uma área.");
          return;
        }})}})
