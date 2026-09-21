(() => {
  const collaborators = {
    heat: [
      ['Mushu Zhao', 'https://scholar.google.com/scholar?q=%22Mushu+Zhao%22'],
      ['Songyang Li', 'https://scholar.google.com/scholar?q=%22Songyang+Li%22'],
      ['Weifeng Li', 'https://www.researchgate.net/profile/Weifeng-Li-4']
    ],
    thermal: [
      ['Mushu Zhao', 'https://scholar.google.com/scholar?q=%22Mushu+Zhao%22'],
      ['Weifeng Li', 'https://www.researchgate.net/profile/Weifeng-Li-4']
    ],
    poverty: [
      ['James Njiraini Gachanja', 'https://www.researchgate.net/profile/James-Njiraini-Gachanja'],
      ['Nashon Adero', 'https://www.researchgate.net/profile/Nashon-Adero']
    ]
  };

  Object.entries(collaborators).forEach(([projectId, people]) => {
    const card = document.querySelector(`.project-card[data-project="${projectId}"]`);
    if (!card) return;

    const block = document.createElement('div');
    block.className = 'project-collaborators';
    block.setAttribute('aria-label', 'Collaborator profiles');
    block.innerHTML = `<span class="project-collaborators-label">Collaborators</span>${people.map(([name, url]) =>
      `<button type="button" class="collaborator-link" data-profile-url="${url}" aria-label="Open ${name}’s academic profile in a new tab">${name}<span aria-hidden="true">↗</span></button>`
    ).join('')}`;

    block.addEventListener('click', event => {
      const button = event.target.closest('.collaborator-link');
      if (!button) return;
      event.preventDefault();
      event.stopPropagation();
      window.open(button.dataset.profileUrl, '_blank', 'noopener,noreferrer');
    });

    card.append(block);
  });
})();
