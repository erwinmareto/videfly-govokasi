import Settings from "../../assets/icons/settings-02.svg";
import Logout from "../../assets/icons/logout-03.svg";

const ProfileMenu = () => {
  return (
    <div className="absolute right-4 top-16 z-50 w-[11rem] font-poppins flex flex-col bg-neutral px-6 py-4 rounded-2xl">
      <div className="flex flex-col font-poppins">
        <div>
          <p className="font-semibold text-white text-sm">
            Upgrade to{" "}
            <span className="font-medium bg-neutral-content text-neutral px-2 rounded-lg">
              PRO
            </span>
          </p>
        </div>

        <div className="w-full h-px bg-slate-400 my-3" />

        <div className="flex items-center text-white gap-2">
          <img src={Settings} alt="Settings" className="w-5 h-5 invert" />
          <span className="font-medium text-sm">Pengaturan</span>
        </div>

        <div className="w-full h-px bg-slate-400 my-3" />

        <div className="flex items-center text-white gap-2">
          <img src={Logout} alt="Log Out" className="w-5 h-5" />
          <span className="font-medium text-sm">keluar</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileMenu;
