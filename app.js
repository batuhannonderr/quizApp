    const questions = [
    {
        soru: "Modern atom teorisine göre elektronların bulunma ihtimalinin en yüksek olduğu bölgelere ne ad verilir?",
        secenekler: ["Yörünge", "Katman", "Orbital", "Çekirdek"],
        dogruCevap: "Orbital"
    },

    {

        soru: "Aşağıdakilerden hangisi bir 'frontend' teknolojisi değildir ?",
        secenekler: ["HTML", "Css", "Node.JS", "JavaScript"],
        dogruCevap: "Node.JS"

    },

    {

        soru: "Dünya tarihindeki ilk yazılı kanunlar olarak kabul edilen metin hangi medeniyete aittir?",
        secenekler: ["Babil", "Sümer", "Hitit", "Asur"],
        dogruCevap: "Sümer"
    },

    {
        soru: "Güneş sistemindeki en büyük gezegen hangisidir?",
        secenekler: ["Mars", "Jüpiter", "Dünya", "Satürn" ],
        dogruCevap: "Jüpiter"
    },
    {
        soru: "Aşağıdakilerden hangisi bir 'HTTP Status Code' olan 403'ün anlamıdır?",
        secenekler: ["Not Found", "Bad Request", "Forbidden", "Unauthorized"],
        dogruCevap: "Forbidden"
    },
    {
        soru: "Hangi ülke hem Avrupa hem de Asya kıtasında toprağı olmasına rağmen başkenti Avrupa kıtasında yer alır?",
        secenekler: ["Kazakistan", "Gürcistan", "Rusya", "Azerbaycan"],
        dogruCevap: "Rusya"
    },
    {
        soru: "Dünyanın en derin noktası olan Mariana Çukuru hangi okyanusta yer almaktadır?",
        secenekler: ["Atlas Okyanusu", "Hint Okyanusu", "Büyük Okyanus (Pasifik)", "Arktik Okyanusu"],
        dogruCevap: "Büyük Okyanus (Pasifik)"
    },

    ]

    const questionText = document.querySelector(".question")
    const answerButtons = document.querySelector(".answer-buttons")
    const next = document.querySelector(".next")

    function quizStart(){
            getQuestion();
    }
    let mevcutSoruIndeksi=0;
    let dogru = 0;
    let yanlis = 0;
    function getQuestion (){
    answerButtons.innerHTML="";    
    const mevcutSoru = questions[mevcutSoruIndeksi];
    // Soruyu ekrana veriyoruz
    questionText.innerHTML = (mevcutSoruIndeksi + 1)+ ". Soru: " + mevcutSoru.soru;
    // Seçenekleri ekrana veriyoruz
    mevcutSoru.secenekler.forEach(answer=>{
    const buton = document.createElement("button")
    buton.innerHTML = answer
    answerButtons.appendChild(buton)
    buton.addEventListener("click", (e)=> answerCheck(e) )
    })

    }

    function answerCheck(e){
        const dogruCevap = questions[mevcutSoruIndeksi].dogruCevap
        const secilenButon = e.target
        const secilenCevap = secilenButon.innerHTML
        if(secilenCevap===dogruCevap){
            secilenButon.style.backgroundColor="#9aeabc"
            dogru +=1;
            
        }
        else{
            secilenButon.style.backgroundColor="red"
            yanlis+=1
           const tumButonlar = document.querySelectorAll("button")
           tumButonlar.forEach(btn =>{
            if(btn.innerHTML===dogruCevap){
                btn.style.backgroundColor = "#9aeabc"
            }
           })
        }
        // ŞIK SEÇİLDİKTEN SONRA BUTONLARI KİLİTLEME İŞLEMİ
        
        const butons = document.querySelectorAll(".answer-buttons button")
        butons.forEach(btn =>{
            btn.disabled = true;
        })

        // NEXT BUTONUNU AKTİF HALE GETİRME
        next.style.cursor="pointer"      
    }
    next.addEventListener("click", (e)=> nextQuestion())
    function nextQuestion(){
        if(dogru+yanlis===questions.length){
            next.style.display="none"
            answerButtons.innerHTML=""
            questionText.innerHTML = "Tebrikler, Quizi tamamladınız."
            answerButtons.innerHTML=`
            <p> Doğru Sayınız: ${dogru} </p>
            <p> Yanlış Sayınız: ${yanlis} </p>
            `

        }
        else{mevcutSoruIndeksi+=1;
        getQuestion();}

    }






    quizStart();