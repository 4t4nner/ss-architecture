import React, { ReactNode } from 'react';
import texts from './texts';

interface Text {
    getText(): ReactNode
}

class Purpose implements Text {
    public getText() {
        return texts.purpose;
    }
}

class Description implements Text {
    public getText() {
        return texts.description;
    }
}
class Conclusion implements Text {
    public getText() {
        return texts.conclusion;
    }
}
class Empty implements Text {
    public getText() {
        return null;
    }
}


interface Creator {
    factoryMethod(variant: string): Text
}

class Lab2 implements Creator {
    public factoryMethod(variant: string) {
        switch (variant) {
            case 'purpose': return new Purpose();
            case 'description': return new Description();
            case 'conclusion': return new Conclusion();
            default: return new Empty();
        }
    }
}

export const getRenderer = (variant: string) => (new Lab2()).factoryMethod(variant)
