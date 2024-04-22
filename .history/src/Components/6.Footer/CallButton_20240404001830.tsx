export default function CallButton() {
  return (
    <>
      <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-3 px-6 bg-red-400 lg:px-14 mr-6 hover:bg-white hover:text-red-400 fixed bottom-5 right-0  lg:hidden" id="call-button" style={{width:"40%"}}>
        <a href="tel:001619-826-9574">Call Now</a>
      </button>
    </>
  );
}
