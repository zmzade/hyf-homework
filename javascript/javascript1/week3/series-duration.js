const seriesDurations = [
    {
      title: "Friends",
      days: 4,
      hours: 2,
      minutes: 20,
    },
    {
      title: "How I Met Your Mother",
      days: 3,
      hours: 4,
      minutes: 16,
    },
    {
      title: "The Simpsons",
      days: 13,
      hours: 23,
      minutes: 30,
    },
  ];

function logOutSeriesText(seriesDurations) {
    let totalPercentage = 0;
    
    for (let{title, days, hours, minutes} of seriesDurations){
        const fraction = ((days*24 + hours)* 60 + minutes) / (80*365*24*60)

        const percentage = Number((fraction * 100).toFixed(3))
        console.log(`${title} took ${percentage}% of my life`)
        
        totalPercentage += percentage;
        }

    console.log(`In total that is ${totalPercentage.toFixed(3)} % of my life`)
}
  
logOutSeriesText(seriesDurations); 