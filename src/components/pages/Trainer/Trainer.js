import React from "react";
import Card from "./Card";
import Navbar from "../../navbar/navbar";
import Footer from "../Footer/Footer";

const Trainer = () => {
  const card1 = {
    image:
      "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "General fitness",
    descr:
      "These trainers are qualified to help people of all fitness levels reach their goals. .",
  };

  const card2 = {
    image:
      "https://hips.hearstapps.com/hmg-prod/images/mh-trainer-2-1533576998.png?resize=1200:*",
    title: "personal trainer",
    descr:
      "Personal trainers work with clients one-on-one to develop and implement personalized fitness plans.",
  };

  const card3 = {
    image:
      "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Group exercise instructor",
    descr:
      "Group exercise instructors lead classes in a variety of fitness activities, such as aerobics, Pilates, and yoga. ",
  };

  const card4 = {
    image:
      "https://img.freepik.com/premium-photo/fitness-old-man-personal-trainer-coaching-with-dumbbell-weightlifting-muscle-support-gym-retirement-health-exercise-workout-senior-training-club-sports-coach-helping-grandpa_590464-145957.jpg?w=1060",
    title: " Sport coach",
    descr:
      "Sports coaches work with athletes to help them improve their performance in their chosen sport. ",
  };

  const card5 = {
    image:
      "https://3989ac5bcbe1edfc864a-0a7f10f87519dba22d2dbc6233a731e5.ssl.cf2.rackcdn.com/athleticrepublicfargo/gallery/row-machines.jpg",
    title: " Athletics INjuries",
    descr:
      "Athletic trainers are certified professionals who are trained to prevent, assess, evaluate, treat, and rehabilitate injuries ",
  };

  const card6 = {
    image:
      "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Wellness specialists",
    descr:
      " Wellness specialists work with clients to help them achieve their overall health and wellness goals.Sports coaches work with athletes",
  };

  const card7 = {
    image:
      "https://img.freepik.com/premium-photo/training-exercise-motivation-with-fitness-coach-personal-trainer-her-bodybuilder-student-during-workout-gym-health-sports-wellness-with-heathy-athlete-exercising_590464-78695.jpg?w=1060",
    title: " Exercise Specialists",
    descr:
      "Exercise specialists work with clients to help them develop safe and effective exercise programs.Sports coaches work with athletes ",
  };

  const card8 = {
    image:
      "https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: " bodybuilding coach",
    descr: "bodybuilder will trained wellSports coaches work with athletes Sports coaches work with athletes Sports coaches work with athletes ",
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">
        <div className="row">
          <h1 style={{textAlign:"center"}}>Trainers</h1>
          <div className="col-3">
            <Card {...card1} />
          </div>
          <div className="col-3">
            <Card {...card2} />
          </div>
          <div className="col-3">
            <Card {...card3} />
          </div>
          <div className="col-3">
            <Card {...card4} />
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col-3">
            <Card {...card5} />
          </div>
          <div className="col-3">
            <Card {...card6} />
          </div>
          <div className="col-3">
            <Card {...card7} />
          </div>
          <div className="col-3">
            <Card {...card8} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Trainer;
