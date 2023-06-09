

//% weight=10 color=#FF6600 icon="\uf030"
/**
//% groups='["语音识别", "颜色识别"]'
*/
namespace ASR_TWO {

    let ai_address = 0x53;

    //% group="语音识别"
    //% weight=40
    //% blockId=ASR-TWO_getid block="get ID"
    export function getid(): number {
        pins.i2cWriteNumber(ai_address, 0x03, NumberFormat.UInt8BE, true);
        let value = pins.i2cReadNumber(ai_address, NumberFormat.UInt8BE, false);
        return value;
    }

    //% group="语音识别"
    //% weight=40
    //% blockId=ASR-TWO_setnum block="set number|%text"
    export function setnum(text: string): void {
        pins.i2cWriteNumber(ai_address, 0x04, NumberFormat.UInt8BE, true);
        for (let index = 0; index < text.length; index++) {
            const element = text[index];
            pins.i2cWriteNumber(ai_address, element, NumberFormat.UInt8BE, true);
        }
        pins.i2cWriteNumber(ai_address, 0x0D, NumberFormat.UInt8BE, true);
        pins.i2cWriteNumber(ai_address, 0x0A, NumberFormat.UInt8BE, false);
    }

}