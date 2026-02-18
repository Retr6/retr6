import figmaIcon from "@/assets/icons/figma.png";
import framerIcon from "@/assets/icons/framer.png";
import photoshopIcon from "@/assets/icons/photoshop.png";
import riveIcon from "@/assets/icons/rive.png";
import chatgptIcon from "@/assets/icons/chatgpt.png";
import illustratorIcon from "@/assets/icons/illustrator.png";
import mixpanelIcon from "@/assets/icons/mixpanel.png";
import midjourneyIcon from "@/assets/icons/midjourney.png";
import notionIcon from "@/assets/icons/notion.png";
import cursorIcon from "@/assets/icons/cursor.png";
import rotatoIcon from "@/assets/icons/rotato.png";
import splineIcon from "@/assets/icons/spline.png";
import blenderIcon from "@/assets/icons/blender.png";
import weavyIcon from "@/assets/icons/weavy.png";
import replitIcon from "@/assets/icons/replit.png";

const Tools = () => {
    const tools = [
        {
            name: 'Figma',
            icon: figmaIcon
        },
        {
            name: 'Framer',
            icon: framerIcon
        },
        {
            name: 'Photoshop',
            icon: photoshopIcon
        },
        {
            name: 'Rive',
            icon: riveIcon
        },
        {
            name: 'ChatGPT',
            icon: chatgptIcon
        },
        {
            name: 'Illustrator',
            icon: illustratorIcon
        },
        {
            name: 'MixPanel',
            icon: mixpanelIcon
        },
        {
            name: 'Midjourney',
            icon: midjourneyIcon
        },
        {
            name: 'Notion',
            icon: notionIcon
        },
        {
            name: 'Cursor',
            icon: cursorIcon
        },
        {
            name: 'Rotato',
            icon: rotatoIcon
        },
        {
            name: 'Spline',
            icon: splineIcon
        },
        {
            name: 'Blender',
            icon: blenderIcon
        },
        {
            name: 'Weavy AI',
            icon: weavyIcon
        },
        {
            name: 'Replit',
            icon: replitIcon
        },
    ]
    return (
        <div>
            <p className="text-[17px] text-white font-medium mt-8">Tools</p>
            <div className="flex flex-wrap gap-2 mt-2">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex items-center gap-2 rounded-full px-3 py-[6px] bg-[#262626] hover:bg-[#26282C] transition-colors min-w-0"
                    >
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="h-6 w-6 object-contain flex-shrink-0"
                        />
                        <span className="text-[13px] text-white/70 truncate">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tools