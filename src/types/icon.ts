interface Icon {
    name: string;
    icon: React.ReactElement;
}

interface StackIcon extends Icon {
    knowledge: number;
}

interface HobbyIcon extends Icon {
    description: string;
}

export type { Icon, StackIcon, HobbyIcon };
