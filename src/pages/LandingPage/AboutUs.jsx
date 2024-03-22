export const AboutUs = () => {
  return (
    <>
      {" "}
      <div
        className="bg-cover bg-center min-h-screen flex justify-center"
        style={{
          backgroundImage: `url("https://siddharthcollege.edu.in/web-assets/img/home-main-slider.jpg")`,
        }}
      >
        <div className="bg-gray-100 w-auto h-auto mx-24  min-h-screen   opacity-100">
          <h1 className="text-4xl font-bold  m-10 text-center mb-8">
            Siddharth College Commercse and Economics
          </h1>
          <h2 className="text-4xl font-bold text-center mb-8 underline">
            About Us
          </h2>
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
            <p className="text-lg text-gray-700">
              {`                Siddharth College of Commerce and Economics, established in
                1953, recognized under Sections 2(f) and 12 (B) of the UGC Act
                is one of the premier affiliated Colleges of the University of
                Mumbai. Our College was the first Commerce College started by
                the People's Education Society and is the second oldest Commerce
                College in Mumbai. The College is situated in South Mumbai which
                is the financial heart of Mumbai and India. Institutions like
                the RBI Headquarters, the Bombay Stock Exchange and the head
                offices of many nationalized banks, including the SBI are within
                walking distance of the College.`}
            </p>
          </div>
          <div className="max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg p-8">
            <p className="text-lg text-gray-700 mt-4">
              {`The College building, Anand Bhavan (formerly Albert Building) is a Grade II Heritage structure. The built-in area includes the College office the offices of the Self-financed Programmes, the library, 3 computer labs, the Examination department, the NCC, NSS and Gymkhana rooms, the Principal's cabin, Professors' Common Room, 14 other class roooms and 1 small room for tutorials as well as the Ph.D. Research Centre. The library lends itself to a quiet and reflective ambience for the students as well as the faculty members. It is well-stocked with books. Besides this, the College also has 8 additional classrooms and one Staff Room in Municipal School Building, Sindhi Lane, which is used for conducting Examinations.`}
            </p>
            {/* Add more paragraphs or content as needed */}
          </div>
          <div className="max-w-3xl mx-auto mt-5 bg-white shadow-md rounded-lg p-8">
            <p className="text-lg text-gray-700 mt-4">
              {`The College provides proper guidance to the students not only to help them choose the right career path, but also to help them in becoming confident and emotionally secure individuals. The College is committed to making students conscious of their social responsibility through outreach programmes organized by NSS and NCC which enhance students' social awareness and sensitivity towards the upliftment of the underprivileged sections of the society. It also helps them discover hidden talents through sports and cultural activities.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
