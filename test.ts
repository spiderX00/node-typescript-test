const fn = () => {
    return new Promise<number>((resolve, reject) => {
        reject(1);
    });
};

const main = async () => {
    try {
        let results = await fn();
        console.info(results);
    }
    catch (e) {
        console.error(e);
    }
};

main();
