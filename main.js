selector1 = ['Heyo man!','Hey dude','Hey man','Hey Name!','Yo Name','Yo man','Hey my man'];
selector2 = ['How\'s everything going?','How are you doing?','Hope all\'s good','Hope everything\'s good','So wassup','Hope ya doing good','So anything new?'];
selector3 = ['I was just going through your content and I\'m loving them all man','Wow dude, your content is dope!','Your content is next-level','Your profile is just impressive, love it','You are killin\' it man','Name, your content, profile everything\'s dope','Keep up the dope work man, your content is lit'];

random1 = Math.random()*7
random2 = Math.random()*7
random3 = Math.random()*7

random1floor = Math.floor(random1)
random2floor = Math.floor(random2)
random3floor = Math.floor(random3)

message1 = selector1[random1floor]
message2 = selector2[random2floor]
message3 = selector3[random3floor]


console.log(message1)
console.log(message2)
console.log(message3)
