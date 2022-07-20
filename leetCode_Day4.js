let emails=["+","leo@email.com","ame@b.com","ame@b.com","amewithoutanything", "@a.com"]

function numUniqueEmails(emails) {
    let uniqueEmails = new Set();
    let filteredList = [];
    for(let i=0;i < emails.length;i++){
        let email = emails[i]
        //need to review regex docs
        if(!email.startsWith("+")&&email.length>6&&email.includes("@")&&email.endsWith(".com")){
            if(email.charAt(email.length-5)!="@"&&email.charAt(email.length-5)!=""){
                if(!filteredList.includes(email)){
                    filteredList.push(email);
                }
                filteredList.forEach((str) => {
                    let parts = str.split("@");
                    let local = parts[0].split("+");
                    uniqueEmails.add(local[0].replaceAll(".", "") + "@" + parts[1]);
                });
            }
        }
    };
    // console.log("new email list size: " + uniqueEmails.size)
    return uniqueEmails.size;
};
console.log(numUniqueEmails(emails));