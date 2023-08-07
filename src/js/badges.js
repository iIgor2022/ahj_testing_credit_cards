export default function createBadge() {
  const img = document.createElement('img');
  img.setAttribute('alt', 'GitHub Workflow Status (with event)');
  img.setAttribute(
    'src',
    'https://img.shields.io/github/actions/workflow/status/iIgor2022/ahj_testing_credit_cards/web.yml',
  );
  return img;
}
