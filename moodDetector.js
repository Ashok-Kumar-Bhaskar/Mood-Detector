var pos = ["affirmative", "Affluent", "Bliss","Calm","Delight", "Divine", "Enthusiastic", "Flourishing", "Grace", "Harmony","Honest", "Hearty","Innovate", "Jovial", "Keen", "Knowledge"," Light", "Laugh", "Luminous", "Merit","Nature", "Paradise", "Poised", "Rejoice", "Smile", "Tranquil", "Victory", "Wondrous", "Welcome","Zeal","Start","Excitement","Love","Powerful","Agree","Admire","Achievement","Approve","Brave","Beautiful","Cool","Creative","Courageous","Easy","Ethical","Earnest","Effective","Energized","Fair","Fine","Fresh","Friendly","Good","Great","Grin","Green","Healthy","Hug","Ideal","Instant","Imagine","Joy","Kind","Motivate","Nice","Novel","Okay","Open","positive","Progress","Proud","Reward","Right","Simple","Special","Sparkling","Worthy","Wow","Whole","Valued"];
var neg = [ "Angry", "Annoy", "Black", "Boring", "Corrosive", "Corrupt", "Depressed", "Detrimental", "Evil"," Fear", "Fight", " Gawky", " Grimace", "Horrendous", "Insane", "Jealous", "Lumpy", "Mean", "Naive","Negate", "Oppressive", "Pain", "Quit", "Sad", "Revenge", "Tense", "Unlucky", " Vicious", "Wicked","Yell","Bad","Cold","Can't","Coldhearted","Cry","Cruel","Dead","Deny","Dirty","Dont,","Fail","Foul","Greed","Gross","Harm","Hard","Hate","Hurt","Ignore","Ill","Impossible","Lose","Messy","Never","Nonsense","Not","Old","Offensive","Poor","Rude","Sick","Slimy","Stupid","Ugly","Upset","Sorrow","End"];
var neutral = ["Young","Allusive","Relaxed","Thin","Economical","Juvenile","Inquisitive","Curious","Secure","Conversational","Save","Tenacious","Filled","Confident","Selective","Different","Old","Happy","Use","Questioning","Baffled","Candid","Consoling","Aggravate","Didactic","Detached","Conventional","Contemplate","Clinical","Ceremonial"];


function Calculate() 
{ 
  var p_words = "";
  var ne_words = "";
  var n_words = "";
  var p=0,n=0,ne=0;
  var text = document.getElementById("incoming").value;
  for(var i=0;i<pos.length;i++)
  {
   var count1 = (text.match(new RegExp(pos[i],'gi')) || []).length;
   if(count1)
   {
    p=p+count1;
    p_words+= pos[i] + " ";
   }
   }

   for(var i=0;i<neg.length;i++)
   {
   var count2 = (text.match(new RegExp(neg[i],'gi')) || []).length;
   if(count2)
   {
    ne=ne+count2;
    ne_words+= neg[i] + " ";
   }
  }

  for(var i=0;i<neutral.length;i++)
  {
   var count3 = (text.match(new RegExp(neutral[i],'gi')) || []).length;
   if(count3)
   {
    n=n+count3;
    n_words+= neutral[i] + " ";
   }
  } 

   // var Result = "<p>Positive Words : " + p_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + p + "<br>" + 
   // "Negative Words : " + ne_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + ne + "<br>" + 
   // "Neutral Words : " + n_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + n + "<br>";



    if(p>n && p>ne)
    {
       var Result = "<p>Hey Positive Person! Keep Going! <br> Positive Words : " + p_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + p + "<br>" + 
       "Negative Words : " + ne_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + ne + "<br>" + 
       "Neutral Words : " + n_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + n + "<br>";
    }
    else if(ne>p && ne>n)
    {
       var Result = "<p>Hey! You are quiet negative. Come on Cheer up! YOLO! <br> Positive Words : " + p_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + p + "<br>" + 
       "Negative Words : " + ne_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + ne + "<br>" + 
       "Neutral Words : " + n_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + n + "<br>";
    }
    else if((n>p && n>ne) || (p==ne))
    {
       var Result = "<p>Ah! You are more neutral. <br> Positive Words : " + p_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + p + "<br>" + 
       "Negative Words : " + ne_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + ne + "<br>" + 
       "Neutral Words : " + n_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + n + "<br>";
    }
    else
    {
       var Result = "<p>Ouch! Sorry, I couldn't find your mood. I need to become better to find your mood :P. Please try again later. <br> Positive Words : " + p_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + p + "<br>" + 
       "Negative Words : " + ne_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + ne + "<br>" + 
       "Neutral Words : " + n_words + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOccurence:" + n + "<br>";
    }
   document.getElementById("result").innerHTML = Result;
}



