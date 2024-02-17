import React, { useState } from "react";

const teacherProfiles = [
  {
    id: 1,
    name: "Simran Dua",
    location: "Delhi",
    description: "Teaching for 4 years",
    about:
      "“I havebeen doing yoga from the past 6 years . I have myself been teaching yoga from the past 4years. I am patient and help the people do the yoga poses and correct their postures. I make yoga fun for the people . I help them remain healthy and fit and teach them poses according to their need.”",
    imageUrl:
      "https://do-yoga.s3.amazonaws.com/ca3cfb40-7b71-449e-883f-3250147e060e.jpg",
  },
  {
    id: 2,
    name: "Janhvi Mishra",
    location: "Delhi",
    description: "Teaching for 1 years",
    about:
      "“Hello guys i am janhvi. I am a yoga instructor , specialist , & mental cousellor. I have been practicinga & teaching yoga since 2 years. I teach yoga online and have taught a lot of people. I am pursuing my P.G Diploma in yoga , yogic therapy & science. I am an expert in hatha yoga , ashtanaga yoga , yoga in weight loss and power yoga. I would really love to share my journey about how i came to this path of yoga.”",
    imageUrl:
      "https://do-yoga.s3.amazonaws.com/ae1f22d0-713c-46d5-a750-d6d94165d826.jpg",
  },
  {
    id: 3,
    name: "Jaya Faujdar",
    location: "Delhi",
    description: "Teaching for 2 years",
    about:
      "“Experienced and certified yoga teacher with over 4+ years of experience in traditional hatha yoga, vinyasa flow. in depth knowledge of posture alignments, advance breathing practices, meditation practices, shatkriyas and spiritual elements of yoga philosophy & therapeutic aspect in stress management.”",
    imageUrl:
      "https://do-yoga.s3.amazonaws.com/cc20cfe1-271a-45e3-8fbc-86bdc6f6633b.jpg",
  },
  {
    id: 4,
    name: "Rekha Rankawat",
    location: "Sector 47 Gurgaon",
    description: "Teaching for 3 years",
    about:
      "“Namastey ???? My name is Rekha and I am a passionate international yoga teacher with over 5 years of professional experience in designing and leading yoga classes. I have completed my advance 900-hour yoga teacher training at the yoga institute, in Mumbai. I am certified by US YOGA ALLIANCE - RYT 500. I acquired in-depth knowledge about postures, breathing techniques, and spiritual elements of yoga teaching. eager to share my expertise and passion with students.”",
    imageUrl:
      "https://do-yoga.s3.amazonaws.com/dc77fad9-a9cf-4e95-b30e-405106cb9f21.jpg",
  },
];

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleBookClass = () => {
    alert("Your class has been booked!");
    setSelectedProfile(null);
  };

  return (
    <div className="flex mt-10 h-screen">
      <div className="w-1/2 ">
        <h1 className="text-2xl text-orange-600 font-bold">
          All our Yoga Teachers
        </h1>
        <ul className="flex mt-5">
          {teacherProfiles.map((profile) => (
            <li key={profile.id} className="mb-4">
              <div
                className=" p-4 cursor-pointer"
                onClick={() => handleProfileClick(profile)}
              >
                <img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="w-24 h-24 object-cover rounded-full mb-2"
                />
                <h2 className="text-lg font-semibold">{profile.name}</h2>
                <p className="text-sm">{profile.location}</p>
                <p className="text-sm">{profile.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {selectedProfile && (
        <div className="w-1/2">
          <h2 className="text-2xl text-orange-600 font-bold">Selected Profile</h2>

          <div className="bg-orange-200 p-4 rounded-md mt-5">
            <img
              src={selectedProfile.imageUrl}
              alt={selectedProfile.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{selectedProfile.name}</h3>
            <p className="text-sm mb-2">{selectedProfile.location}</p>
            <p className="text-sm mb-2">{selectedProfile.description}</p>
            <p className="text-sm mb-4">{selectedProfile.about}</p>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleBookClass}
            >
              Book a Class
            </button>
          </div>


        </div>
      )}
    </div>
  );
};

export default App;
