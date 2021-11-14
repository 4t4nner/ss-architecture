const colors: Record<string, {
    self:string
    bg: string
}> = {
    '#fff': {
        self: 'белая',
        bg: 'белом'
    },
    '#000': {
        self: 'чёрная',
        bg: 'чёрном'
    },
};

interface IBackground {
    getBackground(): string;
}

class BlackBg implements IBackground {
    public getBackground() {
        return '#000';
    }
}


class WhiteBg implements IBackground {
    public getBackground() {
        return '#fff';
    }
}


abstract class Caption {
    abstract selfColor: string
    getCaption (bgColor: string) {
        return `Я ${colors[this.selfColor].self} обезьяна на ${colors[bgColor].bg} фоне`
    };
}

class BlackCaption extends Caption{
    selfColor = '#000';
}
class WhiteCaption extends Caption{
    selfColor = '#fff';
}

abstract class Monkey {
    protected abstract caption: Caption;
    protected abstract bg: IBackground;

    getBackground () {
        return this.bg.getBackground();
    };
    getCaption () {
        return this.caption.getCaption(this.bg.getBackground());
    };
    getColor() {
        return this.caption.selfColor;
    }
}

export class WhiteMonkey extends Monkey {
    protected caption = new WhiteCaption();
    protected bg = new BlackBg();
}

export class BlackMonkey extends Monkey {
    protected caption = new BlackCaption();
    protected bg = new WhiteBg();
}

export function getMonkey(isWhiteColor: boolean) {
    const monkey = isWhiteColor ? new WhiteMonkey() : new BlackMonkey();

    return {
        background: monkey.getBackground(),
        caption: monkey.getCaption(),
        color: monkey.getColor()
    }
}