import Settings from "../../assets/icons/settings-02.svg";
import Logout from "../../assets/icons/logout-03.svg";

const ProfileMenu = ({ toggleMenu, isOpen }) => {
  return (
    <div
      className={`absolute right-4 top-16 z-50 w-[11rem] font-poppins flex flex-col bg-neutral px-6 py-4 rounded-2xl transition-all ease-in-out duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="flex flex-col font-poppins">
        <div>
          <p className="text-sm font-semibold text-white">
            Upgrade to{" "}
            <span className="px-2 font-medium rounded-lg bg-neutral-content text-neutral">
              PRO
            </span>
          </p>
        </div>

        <div className="w-full h-px my-3 bg-slate-400" />

        <div className="flex items-center gap-2 text-white">
          <img src={Settings} alt="Settings" className="w-5 h-5 invert" />
          <span className="text-sm font-medium">Pengaturan</span>
        </div>

        <div className="w-full h-px my-3 bg-slate-400" />

        <div className="flex items-center gap-2 text-white">
          <img src={Logout} alt="Log Out" className="w-5 h-5" />
          <span className="text-sm font-medium">Keluar</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
