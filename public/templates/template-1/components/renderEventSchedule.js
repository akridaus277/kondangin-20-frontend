export function renderCoupleInfo(container, data) {
    let couple0 = "";
    let couple1 = "";
    let utteranceOpening = "";
    if (data) {
        if (data && Array.isArray(data.couples)) {
            // Jika data memiliki properti `couples`
            data.couples.forEach((element, index) => {
                if (index === 0) {
                    couple0 = element
                }else{
                    couple1 = element
                }
            });
        }
        if (data && data.utterances) {
            // Jika data memiliki properti `utterances`
            utteranceOpening = data.utterances.opening
            
        }
    }
    

    container.innerHTML = `
        <div id="fun-div-id28" class="row pengantin" style="margin-top: -100px;">

                                   
                                    <div id="fun-div-id29" class="col-md-12 container-content-couple-info">
                                        <h1 style="font-size: 40px; color: #ff9c1f !important">Pasangan Pengantin</h1>
                                        <br>
                                        <div id="fun-div-id20" data-aos="zoom-in" class="black-box font-p ucapan_pembuka_cli ucapan_pembuka_gr selector-utterance-opening" style="color: #fff !important; color: #fff !important;">
                                            ${utteranceOpening}
                                        </div>
                                        <br>
                                        <img class="foto_pria_cli" style="width: 70%;border-radius: 100px 100px 0px 0px;border: 10px solid #ff9c1f;margin-bottom: 20px !important;" id="fun-img-id3" data-aos="fade-up" src="${couple0.linkPhoto}">
                                        <div class="data_pria_cli">
                                            <h1 id="pria-fun-h1-id1" data-aos="fade-up" style="color: #ff9c1f !important; font-size: 40px;" class="selector-couple-fullname-0">${couple0.name}
                                            </h1>
                                            <div style="width: 70%; border-bottom: 2px solid #fff; margin: 0 auto;"></div>
                                            
                                            <div id="pria-fun-h3-id1" data-aos="fade-up" class="detail-pengantin selector-couple-additional-0" style="color: #fff !important;">
                                            ${couple0.additionalInfo}
                                            </div>
                                                                                            <a data-aos="fade-up" style="position: relative; display: flex; margin: 0 auto; color: #fff;
                                                justify-content: center; background: #ff9c1f; align-content: center; align-items: center; width: fit-content; padding: 5px 10px;
                                                border-radius: 5px; font-size: 12px; margin-top: 10px;" href="https://instagram.com/${couple0.socialMedia.instagram}" class="selector-couple-instagram-0">
                                                <svg style="margin-right: 5px" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> <span class="social-text">${couple0.socialMedia.instagram}</span></a>
                                                                                    </div>
                                        <br>
                                        <br>
                                    </div>

                                    

                                    <h1 id="fun-h3-id1" data-aos="fade-up" style="color: #ff9c1f !important; font-size: 90px;">&</h1>
                                    <br>
                                    <br>
                                    <div id="fun-div-id32" class="col-md-12">
                                        <img class="foto_wanita_cli" style="width: 70%;border-radius: 100px 100px 0px 0px;border: 10px solid #ff9c1f;margin-bottom: 20px !important;" id="fun-img-id3" data-aos="fade-up" src="${couple1.linkPhoto}">
                                        <div class="data_wanita_cli">
                                            <h1 id="wanita-fun-h1-id2" data-aos="fade-up" style=" font-size: 40px; color: #ff9c1f !important;" class="selector-couple-fullname-1">
                                                ${couple1.name}</h1>
                                            <div style="width: 70%; border-bottom: 2px solid #fff; margin: 0 auto;"></div>
                                            
                                            <div id="wanita-fun-h3-id2" data-aos="fade-up" class="detail-pengantin selector-couple-additional-1" style="color: #fff !important;">
                                                ${couple1.additionalInfo}
                                            </div>
                                                                                            <a data-aos="fade-up" style="position: relative; display: flex; margin: 0 auto; color: #fff;
                                                    justify-content: center; background: #ff9c1f; align-content: center; align-items: center; width: fit-content; padding: 5px 10px;
                                                    border-radius: 5px; font-size: 12px; margin-top: 10px;" href="https://instagram.com/${couple1.socialMedia.instagram}" class="selector-couple-instagram-1">
                                                    <svg style="margin-right: 5px" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                                                    <span class="social-text">${couple1.socialMedia.instagram}</span></a>
                                                                                    </div>
                                    </div>
                                </div>
    `;

    
  }
  