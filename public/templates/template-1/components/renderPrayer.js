export function renderPrayer(container, data) {

    let utterancePrayer = "";
    if (data) {
        if (data && data.utterances) {
            // Jika data memiliki properti `utterances`
            utterancePrayer = data.utterances.prayer
            
        }
    }
    

    container.innerHTML = `
        ${utterancePrayer}
    `;

    
  }
  