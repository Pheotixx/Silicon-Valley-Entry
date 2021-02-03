class Menu {
    constructor(){
        this.title = createElement('h1');
        this.title2 = createElement('h3');
        this.title3 = createElement('h3');
        this.title4 = createElement('h3');
        this.title5 = createElement('h3');

        this.back1 = createButton("Back"); 

        this.doctor = createButton("Contact Doctor");
        this.fees = createButton("Pay Fees");
        this.reports = createButton("Reports");
        this.emergency = createButton("Emergency Call");
        this.home = createButton("Home");
    }

    display(){
        this.title.html("PatientCare");
        this.title.position(displayWidth/2 - 50, 0);

        this.doctor.position(windowWidth/2,windowHeight/2-50);
        this.fees.position(windowWidth/2, windowHeight/2);
        this.reports.position(windowWidth/2, windowHeight/2+50);
        this.emergency.position(windowWidth/2, windowHeight/2 + 75);
        this.home.position(displayWidth/4-200, 0);

        this.doctor.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title2.html("Here You Can contact The Doctor in- charge for any Queries and chat or call him/her");
            this.title2.position(windowWidth/2-250, windowHeight/2);

            this.back1.position(displayWidth/4-100, 0);

            this.back1.mousePressed(()=>{
                this.title2.hide();
                this.title3.hide();
                this.title4.hide();
                this.title5.hide();

                this.back1.hide();

                var backmenu1 = new Backmenu();
                backmenu1.display();

            })

        })

        this.fees.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title3.html("Here You Can Pay The Fees of the medical charges and get a breakdown of what is the cost of individual items");
            this.title3.position(windowWidth/2-500, windowHeight/2);

            this.back1.position(displayWidth/4-100, 0);

            this.back1.mousePressed(()=>{
                 this.title2.hide();
                this.title3.hide();
                this.title4.hide();
                this.title5.hide();

                this.back1.hide();

                var backmenu1 = new Backmenu();
                backmenu1.display();

            })

        })

        this.reports.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title4.html("Here You Can access the results of the medical test which you gave and has been uploaded");
            this.title4.position(windowWidth/2-250, windowHeight/2);

            this.back1.position(displayWidth/4-100, 0);

            this.back1.mousePressed(()=>{
                this.title2.hide();
                this.title3.hide();
                this.title4.hide();
                this.title5.hide();

                this.back1.hide();

                var backmenu1 = new Backmenu();
                backmenu1.display();

            })

        })

        this.emergency.mousePressed(()=>{
            this.doctor.hide();
            this.fees.hide();
            this.reports.hide();
            this.emergency.hide();

            this.title5.html("Here You Can contact the nurses or doctors in case of a very urgent request");
            this.title5.position(windowWidth/2-250, windowHeight/2);

            this.back1.position(displayWidth/4-100, 0);

            this.back1.mousePressed(()=>{
                this.title2.hide();
                this.title3.hide();
                this.title4.hide();
                this.title5.hide();

                this.back1.hide();

                var backmenu1 = new Backmenu();
                backmenu1.display();

            })
            
        })

        this.home.mousePressed(()=>{
            this.doctor.hide();
            this.emergency.hide();
            this.fees.hide();
            this.reports.hide();

            this.title2.hide();
            this.title3.hide();
            this.title4.hide();
            this.title5.hide();

            var form1 = new Form();
            form1.display();
            this.home.hide();
        })
    }
}