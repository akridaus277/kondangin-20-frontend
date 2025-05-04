export function renderCover(container, data) {
    let coupleNickname0 = "";
    let coupleNickname1 = "";
    let guestName = "";
    if (data) {
        if (data && Array.isArray(data.couples)) {
            // Jika data memiliki properti `couples`
            data.couples.forEach((element, index) => {
                if (index === 0) {
                    coupleNickname0 = element.nickName
                }else{
                    coupleNickname1 = element.nickName
                }
            });
        }
        if (data && data.guest) {
            guestName = data.guest;
        }
    }
    

    container.innerHTML = `
        <div id="fun-div-id3" class="bride"></div>
        <div id="fun-div-id4" class="awal-dalam" style="position: absolute; bottom: 150px; width: 100%;">
          <h1 id="awal-fun-h1-id1" style="color: #ffffff !important; font-size: 30px;">Wedding Invitation</h1>
          <br><br>
          <h1 style="font-size: 58px; color: #ff9c1f !important; line-height: 35px; margin-top: 0px;">
            <span class="selector-couple-name-0">${coupleNickname0}</span> & <span class="selector-couple-name-1">${coupleNickname1}</span>
          </h1>
          <br>
          <h3 id="awal-fun-h3-id2" style="color: #fff !important">Kepada</h3>
          <br>
          <h3 style="margin-top: -20px; color: #fff !important" id="kpd">Yth. ${guestName}</h3>
          <br>
          <button id="btn_open" class="button-black" style="margin: 0 auto; width: 70%; border-radius: 8px;" type="button" data-keyboard="false">
            Buka Undangan
          </button>
        </div>
    `;
    
  }
  