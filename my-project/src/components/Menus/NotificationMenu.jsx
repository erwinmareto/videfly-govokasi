import DoubleTick from "../../assets/icons/tick-double-02.svg";
import Cancel from "../../assets/icons/cancel-01.svg";
import VideoLayer from "../../assets/icons/f7_layers-fill.svg";
import ProfilePic2 from "../../assets/images/profile-pic-2.png";
import ProfilePic3 from "../../assets/images/profile-pic-3.png";

const NotificationMenu = ({ toggleMenu }) => {
  return (
    <div className="absolute right-14 top-16 z-50 w-[28rem] font-poppins flex flex-col bg-neutral rounded-2xl">
      <div className="flex justify-between items-center px-6 py-4 border-b-2 border-neutral-content">
        <h5 className="font-bold text-white text-md">Notifications</h5>
        <div className="flex gap-6">
          <img src={DoubleTick} alt="Checkmark" />
          <img
            src={Cancel}
            alt="Cancel"
            className="cursor-pointer"
            onClick={() => toggleMenu(null)}
          />
        </div>
      </div>

      <div className="flex items-start px-6 py-4 border-b-2 border-neutral-content">
        <div className="relative">
          <span className="font-semibold text-sm text-white">All inbox</span>
          <div className="inline-flex bg-alert font-semibold text-sm text-white px-2 py-0.5 rounded ml-2">
            5
          </div>
          <div className="absolute -bottom-4 w-full h-1 bg-primary rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-6 py-4">
        <div className="flex items-start gap-2">
          <div className="rounded-full bg-slate-200 p-2">
            <img src={VideoLayer} alt="Video Layer" />
          </div>
          <div>
            <p className="text-sm text-white leading-6">
              <span className="font-semibold">Your</span> video is rendering!
              This may take a moment.
            </p>
            <div className="flex items-center font-medium text-xs text-slate-500">
              <span>Video</span>
              <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
              <span>Just now</span>
            </div>

            {/* progress bar */}
            <div className="flex flex-col items-end">
              <p className="font-semibold text-xs text-slate-500">50%</p>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div className="bg-blue-500 h-full w-[50%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="relative rounded-full bg-slate-200">
            <img
              src={ProfilePic2}
              alt="Profile Picture 2"
              className="w-10 h-10 rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-500" />
          </div>
          <div>
            <p className="text-sm text-white leading-6">
              <span className="font-semibold">Leslie Alexander</span> create a
              new <span className="font-semibold">URL to Video</span>
            </p>
            <div className="flex items-center font-medium text-xs text-slate-500">
              <span>Video</span>
              <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
              <span>15 min ago</span>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <div className="relative rounded-full bg-slate-200">
            <img
              src={ProfilePic3}
              alt="Profile Picture 3"
              className="w-10 h-10 rounded-full"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-yellow-500" />
          </div>
          <div>
            <p className="text-sm text-white leading-6">
              <span className="font-semibold">James Bond</span> create a new{" "}
              <span className="font-semibold">URL to Video</span>
            </p>
            <div className="flex items-center font-medium text-xs text-slate-500">
              <span>Video</span>
              <div className="inline-flex w-1.5 h-1.5 bg-slate-500 rounded-full mx-2" />
              <span>2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotificationMenu;
