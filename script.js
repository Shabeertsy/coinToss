
        let head = './images/download (2).jpeg'
        let tail = './images/download (1).jpeg'
        document.getElementById('head').src = head
        let sysValue = 2;
        let user = 2;
        let userPoints = 0;
        let sysPoints = 0;
        let randomValue = 2;
        let count = 0

        function coinFlip() {
            myin = setInterval(() => {
                count++

                randomValue = Math.floor(Math.random() * 2)
                console.log('coin ', randomValue);
                console.log('sys ', sysValue);
                console.log('user ', user);

                if (randomValue == 1) {
                    document.getElementById('head').src = head
                } else {
                    document.getElementById('head').src = tail
                }
                
                if (count == 30) {
                    clearInterval(myin)
                    checkData()
                    count=0;
                }
            }, 80)



    }


function checkData(){

    if (randomValue == user && randomValue != sysValue) {
                userPoints++
                document.getElementById('user').innerHTML = userPoints
            } else if (randomValue == sysValue && randomValue != user) {
                sysPoints++
                document.getElementById('sys').innerHTML = sysPoints
            }

            if (userPoints == 5 || sysPoints == 5) {
                setTimeout(() => {
                    location.reload()
                }, 1000)
            
        }
}


        function headClick(userValue) {       
            user = userValue
            sysValue = Math.floor(Math.random() * 2)  
            coinFlip()
            
           
        }


        function tailClick(userValue) {   
            user = userValue
            sysValue = Math.floor(Math.random() * 2)    
            coinFlip()
           
        }


        function resetData() {
            location.reload();
        }
