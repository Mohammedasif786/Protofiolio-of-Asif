function Education() {
  return (
    <div className="border-2 w-4/4 content-center max-h-3/4 p-4 text-2xl text-center">
      <h1 className="text-2xl font-bold mb-8">-:My Education:-</h1>
      <div className="lg:grid lg:grid-cols-2">
        <div className="flex lg:flex-col gap-4 justify-center items-center mb-12">
          <img
            src="https://cache.careers360.mobi/media/colleges/social-media/logo/logo_MxTR04X.png"
            alt="KCT DIPLOMA"
          />
          <div className="text-lg">
            <h2 className="font-bold">KCT Polytehnic College</h2>
            <p className="italic">
              Diploma in Computer Science and Engineering
            </p>
            <p className="font-bold">2019-2022</p>
          </div>
        </div>
        <div className="">
          <img
            src="https://content.jdmagicbox.com/comp/gulbarga/c9/9999p8472.8472.190911014249.i8c9/catalogue/khaja-bandanawaz-university-khaja-colony-gulbarga-universities-zymk8kd4ed.jpg"
            alt="KBU"
            className="lg:w-70 lg:relative lg:left-37"
          />
          <div className="text-lg">
            <h2 className="font-bold">Khaja Bandanawaz University</h2>
            <p className="italic">
              Bachelor of Computer Science and Engineering
            </p>
            <p className="font-bold">2022-2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
