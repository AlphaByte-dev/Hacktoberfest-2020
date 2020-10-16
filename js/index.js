(() => {
  const participantsHTML = document.getElementById("participants");

  let html = "";
  participants.forEach(participant => {
    html += `
      <div class="participant">
        <div class="participant__name">${participant.name}</div>
        <div class="participant__college">${participant.college}</div>
      </div>
    `
  });
  console.log('GG');
  participantsHTML.innerHTML = html;
})()