export function renderHeader(container, data) {
    let coupleNickname0 = "";
    let coupleNickname1 = "";
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
    }
    

    container.innerHTML = `
        <div id="fun-div-id14" class="" style="position: absolute;  width: 100%; bottom: 0px">
                                <div id="fun-div-id15" style="padding: 0px 20px; position: relative; top: 105px">
                                    <img id="fun-img-awalid4" class="home-" loading="lazy" style="    filter: brightness(0) invert(1);" src="images/yHhLL5VnAUej.png" alt="">
                                    <br>
                                    <div style="height: 20px"></div>
                                    <h3 id="box1-fun-h3-id1" style="color: #ffffff !important; margin-bottom: 0px; font-size: 25px">We Invited You To</h3>
                                    <div id="fun-div-id21a" data-aos="zoom-in" style="width:70%; margin: 0 auto">
                                                                                            <h3 id="box1-fun-h3-id2" style=" color: #ffffff !important; margin-bottom: 8px; font-size: 20px">The Wedding Of</h3>
                                                <div class="panggilan_mempelai_cli">
                                                    <h1 id="box1-fun-h1-id3" style=" font-size: 48px; color: #ff9c1f !important;     line-height: 50px; margin-top: 10px;">
                                                        ${coupleNickname0} & ${coupleNickname1}
                                                    </h1>
                                                </div>
                                                                                    </div>
                                    <div style="height: 40px"></div>
                                        <div style="height: 10px"></div>
                                </div>
                                <img style="" src="images/Xx9EQKoILGh8.png" alt="">
                            </div>
    `;

    
  }
  