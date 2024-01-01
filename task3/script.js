function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function toggleMode() {
  const body = document.body;
  const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
  const newMode = currentMode === 'dark' ? 'light' : 'dark';

  body.classList.remove(currentMode + '-mode');
  body.classList.add(newMode + '-mode');

  updateColors(newMode);
}

function updateColors(mode) {
  const root = document.documentElement;
  const colors = {
      dark: {
      '--bg-color': '#343a40',
      '--text-color': '#fff',
      '--btn-bg-color': '#495057',
      '--btn-text-color': '#fff'
    },  
      light: {
      '--bg-color': '#f8f9fa',
      '--text-color': '#000',
      '--btn-bg-color': '#e9ecef',
      '--btn-text-color': '#000'
    }

  };

  Object.entries(colors[mode]).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
}
