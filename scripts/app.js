document.addEventListener('DOMContentLoaded', () => {
    const contents = [
        {
            title: "Microsoft 365 Apps များ အသုံးပြုနည်း Courses များ",
            summary: "Office 365 ၏ အခြေခံနှင့် အဆင့်မြင့် လုပ်ဆောင်ချက်များကို လေ့လာပါ။",
            url: "https://www.youtube.com/watch?v=gXNpAa1tkDg&list=PLJ7KN4PdFSoEHOtd28fBnWvKtdrm4DtNQ" 
        },
        {
            title: "Microsoft 365 ၏ Admin Center အကြောင်းများ",
            summary: "Microsoft 365 Admin Center ကို စတင်အသုံးပြုနည်းများ။",
            url: "https://www.youtube.com/watch?v=5aR4DZ3ovFo&list=PLJ7KN4PdFSoGkIgCAK3_ydVmuqmW7Nngz" 
        },
        {
            title: "Cisco Packet Tracer သင်ခန်းစာများ",
            summary: "Cisco Packet Tracer ကို အသုံးပြုပြီး Network Simulation ဖန်တီးနည်းများကို လေ့လာပါ။",
            url: "https://www.youtube.com/watch?v=JGfhHznhdaw&list=PLJ7KN4PdFSoH3IWV32t9uBnpV2dXlsNE-"
        }
    ];

    const contentListElement = document.getElementById('content-list');

    // Content 
    contents.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'content-item';
        itemDiv.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
        `;
        
        // ----------------------------------------------------
        // **Link 
        // ----------------------------------------------------
        itemDiv.addEventListener('click', () => {
            if (item.url) {
                // Link 
                window.open(item.url, '_blank'); 
                // window.location.href = item.url;
            } else {
                alert(`"${item.title}" အတွက် လင့်ခ် မရှိသေးပါ။`);
            }
        });
        // ----------------------------------------------------
        
        contentListElement.appendChild(itemDiv);
    });
});

// "ဆက်သွယ်ရန်" 
function showContact() {
    const userName = document.getElementById('user-name').textContent;
    alert(`👋 ${userName} ကို ဆက်သွယ်လိုပါသလား။ အီးမေးလိပ်စာ: minnyithattant@example.com`);
}