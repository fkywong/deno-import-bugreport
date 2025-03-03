# deno-import-bugreport

Documents what seems to be a regression in specifying non-default imports for JSR
packages.

## Test commands

* deno v2.1.4 ✅:  
    ```sh
    $ ~/bin/deno-v2.1.4 --version                                                                                  
    # deno 2.1.4 (stable, release, aarch64-apple-darwin)
    # v8 13.0.245.12-rusty
    # typescript 5.6.2

    $ ~/bin/deno-v2.1.4 test --allow-read=.env --allow-env hello_world_test.ts                           
    # Check file:///Volumes/git/fkywong/deno-import-bugreport/hello_world_test.ts
    # running 1 test from ./hello_world_test.ts
    # Test dotenv auto-loading ... ok (0ms)
    # 
    # ok | 1 passed | 0 failed (0ms)
    ```
* deno v2.1.5 thru v2.2.2 ❌:  
    ```sh
    $ deno --version                                                          
    # deno 2.2.2 (stable, release, aarch64-apple-darwin)
    # v8 13.4.114.9-rusty
    # typescript 5.7.3

    $ deno test --allow-read=.env --allow-env hello_world_test.ts
    # error: Relative import path "@std/dotenv/load" not prefixed with / or ./ or ../ and not in import map from "file:///Volumes/git/fkywong/deno-import-bugreport/hello_world_test.ts"
    # at file:///Volumes/git/fkywong/deno-import-bugreport/hello_world_test.ts:2:8
    ```

## References

* JSR documentation: https://jsr.io/docs/using-packages#entrypoints