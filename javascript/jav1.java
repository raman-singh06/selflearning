public class ArrowAntiPatter
{
        public string CheckGrade (int score)
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
}
console.log(ArrowAntiPatter(89))