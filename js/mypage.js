const statusTabs = document.querySelectorAll('.status-tab');
const simulationCards = document.querySelectorAll('.simulation-card[data-status]');

statusTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const filter = tab.dataset.filter;

    statusTabs.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    simulationCards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.status !== filter;
    });
  });
});
