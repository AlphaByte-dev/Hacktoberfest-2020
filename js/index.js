(() => {
  const participantsHTML = document.getElementById("participants");
  participants.reverse();

  let html = "";
  participants.forEach(participant => {
    html += `
      <div class="participant">
        <div class="participant__left">
          <div class="participant__image">
            <img src="${'https://github.com/' + participant.github + '.png'}" alt="profile image">
          </div>
        </div>
        <div class="participant__right">
          <div class="participant__name">${participant.name}</div>
          <div class="participant__college">${participant.college}</div>
          <div class="participant__socials">
            ${participant.github ? `<a href="${'https://github.com/' + participant.github}" target="_blank">
              <img src="img/social/github-logo.svg" alt="GitHub">
            </a>` : ''}
            ${participant.linkedin ? `<a href="${participant.linkedin}" target="_blank">
              <img src="img/social/linkedin-logo.svg" alt="LinkedIn">
            </a>` : ''}
            ${participant.website ? `<a href="${participant.website}" target="_blank">
              <img src="img/social/website-logo.svg" alt="Website">
            </a>` : ''}
          </div>
        </div>
      </div>
    `
  });
  participantsHTML.innerHTML = html;
})()