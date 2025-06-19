fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const chart = document.querySelector('.chart');
    const maxAmount = Math.max(...data.map(d => d.amount));

    data.forEach(item => {
      const group = document.createElement('div');
      group.classList.add('bar-group');

      const value = document.createElement('div');
      value.classList.add('value');
      value.textContent = `$${item.amount}`;

      const bar = document.createElement('div');
      bar.classList.add('bar');
      bar.style.height = `${(item.amount / maxAmount) * 150}px`;

      if (item.amount === maxAmount) {
        bar.classList.add('highlight');
      }

      const label = document.createElement('div');
      label.classList.add('label');
      label.textContent = item.day;

      group.appendChild(value);
      group.appendChild(bar);
      group.appendChild(label);
      chart.appendChild(group);
    });
  });