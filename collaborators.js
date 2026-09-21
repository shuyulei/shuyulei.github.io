(() => {
  const projects = {
    heat: {
      article: 'https://doi.org/10.1038/s44333-026-00083-7',
      authors: [
        { name: 'Mushu Zhao', role: 'First author', profile: 'https://scholar.google.com/scholar?q=%22Mushu+Zhao%22' },
        { name: 'Shuyu Lei', role: 'Co-author' },
        { name: 'Songyang Li', role: 'Co-author', profile: 'https://scholar.google.com/scholar?q=%22Songyang+Li%22' },
        { name: 'Weifeng Li', role: 'Corresponding author', profile: 'https://www.researchgate.net/profile/Weifeng-Li-4' }
      ]
    },
    thermal: {
      article: 'https://doi.org/10.1016/j.scs.2026.107254',
      authors: [
        { name: 'Mushu Zhao', role: 'First author', profile: 'https://scholar.google.com/scholar?q=%22Mushu+Zhao%22' },
        { name: 'Shuyu Lei', role: 'Co-author' },
        { name: 'Weifeng Li', role: 'Co-author', profile: 'https://www.researchgate.net/profile/Weifeng-Li-4' }
      ]
    },
    poverty: {
      article: 'https://doi.org/10.1016/j.apgeog.2025.103578',
      authors: [
        { name: 'James Njiraini Gachanja', role: 'First author', profile: 'https://www.researchgate.net/profile/James-Njiraini-Gachanja' },
        { name: 'Shuyu Lei', role: 'Co-author' },
        { name: 'Nashon Adero', role: 'Co-author', profile: 'https://www.researchgate.net/profile/Nashon-Adero' }
      ]
    }
  };

  const dialog = document.querySelector('#project-dialog');
  const detail = document.querySelector('#project-detail');
  const closeButton = dialog?.querySelector('.dialog-close');
  if (!dialog || !detail || !closeButton) return;

  const closeDialog = () => {
    dialog.close();
    document.body.classList.remove('dialog-open');
  };

  closeButton.addEventListener('click', closeDialog);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener('click', event => {
    if (event.target === dialog) closeDialog();
  });

  Object.entries(projects).forEach(([projectId, project]) => {
    const card = document.querySelector(`.project-card[data-project="${projectId}"]`);
    if (!card) return;

    const cue = document.createElement('span');
    cue.className = 'project-detail-cue';
    cue.textContent = 'View project details & author roles';
    card.append(cue);

    card.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();

      const title = card.querySelector('h3')?.textContent.trim() || 'Research project';
      const summary = card.querySelector('h3 + p')?.textContent.trim() || '';
      const venue = card.querySelector('.project-venue')?.textContent.trim() || '';
      const image = card.querySelector('.project-visual img');

      detail.innerHTML = `
        <header class="detail-header">
          <span class="section-number">Collaborative research</span>
          <h2 id="project-title">${title}</h2>
          <p class="detail-deck">${summary}</p>
        </header>
        ${image ? `<figure class="detail-figure"><img src="${image.getAttribute('src')}" alt="${image.getAttribute('alt') || ''}"></figure>` : ''}
        <div class="detail-body collaborator-detail-body">
          <div>
            <h3>Publication</h3>
            <p>${venue}</p>
            <a class="text-link article-link" href="${project.article}" target="_blank" rel="noopener">Open published article</a>
          </div>
          <aside class="detail-meta author-roles">
            <strong>Authors & roles</strong>
            <p class="author-role-note">Select a linked name to open that collaborator’s academic profile.</p>
            <ul>${project.authors.map(author => `<li>${author.profile ? `<a href="${author.profile}" target="_blank" rel="noopener">${author.name}</a>` : `<span>${author.name}</span>`}<small>${author.role}</small></li>`).join('')}</ul>
          </aside>
        </div>`;

      dialog.showModal();
      document.body.classList.add('dialog-open');
      window.lucide?.createIcons();
    });
  });
})();
