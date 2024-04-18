function ArrowAntiPatter(score)

        
        { 
            if (score >=90)
            { 
                return "A";
            }
            else if (score >=80)
            { 
                return "B";
            }
            else if (score >=70)
            {
                return "C";
        
            }
            else if (score >= 60)
            {
                return "C";
            }
            else 
            return "F";
        }

console.log(ArrowAntiPatter(91))

/*function ArrowAntiPatter(score)
{
    switch (true)
    {
        case score>=90:
            return "A";

            //break; 
        case score>=80 :
            return "B";

            //break;

        case score >=70 :
            return "C";
            
            //break;

        case score >=60:
            return "D";

            //break;

        default:
            return "F";
        

    

    }
}
console.log(ArrowAntiPatter(25));*/
