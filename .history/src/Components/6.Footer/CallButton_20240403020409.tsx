export default function CallButton() {
  return (
    <>
      <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-red-400 lg:px-14 mr-6 sm:fixed sm:bottom-5 lg:hidden" style={{width:"50%"}} id="call-button">
        <a href="tel:001619-826-9574">Call Now</a>
      </button>
    </>
  );
}
