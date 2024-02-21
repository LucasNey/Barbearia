document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Segunda 26/02'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Terça  27/02'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Quarta 28/02'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Quinta 29/02'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sexta 01/03'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sabado 02/03'];
    const hoursOfDay = Array.from({ length: 13 }, (_, i) => i + 8); // Horários das 8h às 20h
    
    const calendar = document.getElementById('calendar');
  
    // Função para verificar se um horário está disponível ou não
    function isSlotAvailable(day, hour) {
      // Simule aqui a lógica para verificar se o horário está disponível
      // Por enquanto, retornaremos true para todos os horários
      return true;
    }
  
    // Criação dos cabeçalhos dos dias da semana
    daysOfWeek.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('day', 'day-header');
      dayHeader.textContent = day;
      calendar.appendChild(dayHeader);
    });
  
    // Criação dos slots de horários
    for (let i = 0; i < daysOfWeek.length; i++) {
      for (let j = 0; j < hoursOfDay.length; j++) {
        const slot = document.createElement('div');
        slot.classList.add('day', 'slot');
        if (j === 0) slot.classList.add('first-column');
        
        const hour = hoursOfDay[j];
        const dayOfWeek = daysOfWeek[i];
        const available = isSlotAvailable(dayOfWeek, hour);
        slot.innerHTML = `<span>${hour}:00</span><button ${available ? '' : 'disabled'}>Agendar</button>`;
        slot.querySelector('button').addEventListener('click', function() {
          const name = prompt(`Digite seu nome para agendar o horário ${hour}:00 na ${dayOfWeek}:`);
          if (name) {
            this.disabled = true;
            this.textContent = 'Agendado';
            slot.classList.add('booked');
            slot.innerHTML += `<span class="agendado">${name}</span>`;
          }
        });
  
        if (available) {
          slot.classList.add('available');
        }
  
        calendar.appendChild(slot);
      }
    }
  });